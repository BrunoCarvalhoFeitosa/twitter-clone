export type DataUserProps = {
    user: {
        bio: string;
        coverImage: string;
        createdAt: string;
        email: string;
        emailVerified: boolean;
        followersCount: number;
        followingIds: Array<string>;
        hasNotification: boolean;
        hashedPassword: string;
        id: string;
        image: string;
        name: string;
        profileImage: string;
        updatedAt: string;
        username: string;
    }
}