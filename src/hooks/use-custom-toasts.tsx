import { buttonVariants , Button } from "@/components/ui/Button"
import { toast } from "./use-toast"
import Link from "next/link";


export  const  useCustomToasts = () => {
    
    const loginToast = () => {
            const {dismiss} = toast({
                title : 'Login Required.',
                description: 'This activity requires login',
                variant: 'destructive',
                action: (
                    <Link 
                        href='/sign-in' 
                        onClick={()=>dismiss()} 
                        className={buttonVariants({variant: 'outline'})}>
                        Login
                    </Link>
                ),
            }) 
        }

    
    return {loginToast}
}