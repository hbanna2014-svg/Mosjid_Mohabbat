import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Info } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="space-y-6 pb-20">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-[#1e293b]">প্রাইভেসি পলিসি</h2>
        <p className="text-xs text-[#64748b]">মসজিদ মহব্বত অ্যাপের গোপনীয়তা নীতি</p>
      </div>

      <Card className="bg-white border-[#e2e8f0] shadow-sm rounded-3xl overflow-hidden">
        <CardHeader className="bg-emerald-50 border-b border-emerald-100 p-6">
          <CardTitle className="text-lg font-bold flex items-center gap-2 text-emerald-800">
            <ShieldCheck className="w-5 h-5" />
            আমরা কেন আপনার তথ্য ব্যবহার করি?
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6 text-sm leading-relaxed text-[#475569]">
          <section className="space-y-3">
            <h3 className="font-bold text-[#1e293b] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              লোকেশন পারমিশন (Geolocation)
            </h3>
            <p>
              এই অ্যাপটি আপনার বর্তমান অবস্থান ব্যবহার করে আপনার নিকটস্থ মসজিদগুলো খুঁজে পেতে সাহায্য করে। আপনার লোকেশন সার্ভারে সেভ করা হয় না এবং এটি শুধুমাত্র অ্যাপ চলাকালীন সময়ে ব্যবহৃত হয়।
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-[#1e293b] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ব্যক্তিগত তথ্য (User Data)
            </h3>
            <p>
              লগইন করার সময় গুগল থেকে আপনার নাম এবং ইমেইল সংগ্রহ করা হয় শুধুমাত্র ইউজার প্রোফাইল তৈরির জন্য। আমরা আপনার তথ্য তৃতীয় কোনো পক্ষের কাছে বিক্রি বা শেয়ার করি না।
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-[#1e293b] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ক্যামেরা ও গ্যালারি
            </h3>
            <p>
              শুধুমাত্র মসজিদের এডমিনরা যদি মসজিদের ছবি আপলোড করতে চান, তখনই এই পারমিশনগুলোর প্রয়োজন হয়। সাধারণ ইউজারদের জন্য এটি প্রয়োজন নেই।
            </p>
          </section>

          <div className="pt-4 mt-6 border-t border-[#f1f5f9] flex items-start gap-3 bg-[#f8fafc] p-4 rounded-2xl">
            <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#64748b]">
              যেকোনো প্রশ্ন বা তথ্যের জন্য আমাদের ইমেইল করুন: <b>support@mosquemohabbat.app</b>। আমরা আপনার গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-[10px] text-[#94a3b8] uppercase tracking-widest font-bold">Version 1.0.0 • Made with Love</p>
      </div>
    </div>
  );
}
