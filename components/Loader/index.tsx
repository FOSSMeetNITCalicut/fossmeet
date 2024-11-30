import { ThreeDots } from "react-loader-spinner";

interface LoaderProps { 
    loading: boolean;
}

export default function Loader({
    loading
}: LoaderProps) {
    return (
            <ThreeDots
                visible={loading}
                height="80"
                width="80"
                color="#FE8B4A"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
    )
}