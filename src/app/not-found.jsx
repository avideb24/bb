import Link from "next/link";
import img from '../../public/images/404-img.png';
import Image from "next/image";
import Button2 from "@/components/shared/Button2/Button2";


const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="-mt-20">
                <Image src={img} className="mx-auto" alt="404 Image" />
                <h1 className="text-2xl font-bold mt-2 mb-6">Your requested page was not found!</h1>
                <Link href={'/'} className="block text-center">
                    <Button2 btnText={'Go Home'} />
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;