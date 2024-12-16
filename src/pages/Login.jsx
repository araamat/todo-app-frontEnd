   import { Label } from "@/components/ui/label";   
   import { Input } from "@/components/ui/input";
   import { Button } from "@/components/ui/button";   
   
   export const Login = () => {
    return (
        <div>
            <form className="max-w-xs mx-auto flex flex-col gap-4">
                <h3>Logi sisse või ära logi sisse</h3>

                
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" id="email" name="email" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="password">Parool</Label>
                        <Input type="password" id="password" name="password" />
                    </div>

                    
                        <Button type="submit">Logi sisse</Button>
                

               
            </form>
        </div>
    );
}