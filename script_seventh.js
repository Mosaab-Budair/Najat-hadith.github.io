// تعريف الأحاديث النبوية الخاصة بالصف السابع
const hadiths = [
    { text: "حديث 10: سبب إجابة الدعاء", link: "hadith10.html"  },
    
    { text: "حديث 11: اترك ما شككت فيه", link: "hadith11.html" },
    { text: "حديث 12: الاشتغال بما يفيد", link: "hadith12.html" },
    { text: "حديث 13: من كمال الايمان", link: "hadith13.html" },
    { text: "حديث 14: متى يهدر دم المسلم", link: "hadith14.html" }, // Added missing comma here
    { text: "حديث 15: اكرام الضيف", link: "hadith15.html" },
    { text: "حديث 16: النهي عن الغضب", link: "hadith16.html" },
    { text: "حديث 17: الرفق بالحيوان", link: "hadith17.html" },
    { text: "حديث 18: الخلق الحسن", link: "hadith18.html" },
];

// دالة لعرض الأحاديث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const hadithList = document.getElementById('hadiths2-list'); // Ensure this ID matches your HTML

    // إضافة الأحاديث إلى القائمة
    hadiths.forEach(hadith => {
        const li = document.createElement('li');
        li.className = 'hadith'; // Ensure the class name matches the CSS
        li.textContent = hadith.text;

        // توجيه المستخدم للصفحة الخاصة بالحديث عند النقر
        li.addEventListener('click', () => {
            window.location.href = hadith.link;
        });

        hadithList.appendChild(li);
    });
});
