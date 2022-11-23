import UserDescription from "../../components/Profile/UserDescription";
import MainLayout from "../../layout/MainLayout";
export default function Profile() {
    return (
        <MainLayout>
            <div className="profile">
                <UserDescription></UserDescription>
            </div>
        </MainLayout>
    )
}