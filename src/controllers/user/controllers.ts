import { ApiError } from "../../helpers";
import UserModel from "../../models/user";
import { firebaseAuth } from "../../utils";
import { UserRecord } from 'firebase-admin/auth'
import { getAuth } from "firebase/auth"
export async function verifyToken(token: string) {
    const firebaseDecodedToken = await firebaseAuth.verifyIdToken(token);
    if (!firebaseDecodedToken) throw new ApiError(404, 'User not found!');
    const firebaseUser = await firebaseAuth.getUser(firebaseDecodedToken.sub);
    return checkUser(firebaseUser);
}

export async function checkUser(firebaseUser: UserRecord) {
    const user = await UserModel.findOneAndUpdate({
        firebaseUid: firebaseUser.uid
    }, {
        firebaseUid: firebaseUser.uid,
        email: firebaseUser.email,
        emailVerified: firebaseUser.emailVerified,
        displayName: firebaseUser.displayName,
        photoUrl: firebaseUser.photoURL,
    }, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
    })

    return user;
}