import UserDescription from "../../components/Profile/UserDescription";
import MainLayout from "../../layout/MainLayout";
export default function Profile() {
    return (
        <MainLayout>
            <div className="width:100%;display:flex;justify-content:center;">
                <UserDescription></UserDescription>
            </div>
        </MainLayout>
    )
}