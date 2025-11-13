"use client";
 
 import { useCallback } from "react";
 import { useRouter } from "next/navigation";
 
 import Component1920PxContact from "@/imports/1920PxContact";
 
 const ContactPage = () => {
   const router = useRouter();
 
   const handleNavigate = useCallback(
     (page: string, productName?: string) => {
       switch (page) {
         case "home":
           router.push("/");
           break;
         case "who-we-are":
           router.push("/about");
           break;
         case "factories":
           router.push("/factories");
           break;
         case "quality":
           router.push("/quality");
           break;
         case "products":
           router.push("/products");
           break;
         case "product-list":
           router.push("/products/list");
           break;
         case "product-detail":
           router.push(
            productName
              ? `/products/detail/${encodeURIComponent(productName)}`
              : "/products/detail",
           );
           break;
         case "contact":
           router.push("/contact");
           break;
         default:
           router.push("/");
       }
 
       window.scrollTo({ top: 0, left: 0, behavior: "auto" });
     },
     [router],
   );
 
   return (
     <div className="w-full min-h-screen overflow-x-hidden">
       <Component1920PxContact onNavigate={handleNavigate} />
     </div>
   );
 };
 
 export default ContactPage;
 
