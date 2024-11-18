// تعريف الأحاديث النبوية الخاصة بالصف السابع
const hadiths = [
    { text: "حديث 28: السمع والطاعة", link: "hadith28.html" },
    { text: "حديث 29: بواب الخير" ,link: "hadith29.html" },
    { text: "حديث 30: الوقوف عند حدود الشرع", link: "hadith30.html" },
    { text: "حديث 31: الزهد في الدنيا", link: "hadith31.html" },
    { text: "حديث 32: لاضرر ولا ضرار", link: "hadith32.html" }, // Added missing comma here
    { text: "حديث 33: البيّنة على المُدَّعي", link: "hadith33.html" },
    { text: "حديث 34: تغيير المنكر فريضة", link: "hadith34.html" },
    { text: "حديث 35: المسلم أخو المسلم", link: "hadith35.html" },
    { text: "حديث 36: قضاء حوائج المسلمين", link: "hadith36.html" },
];

// دالة لعرض الأحاديث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const hadithList = document.getElementById('hadiths2-list'); // تأكد من تطابق ID مع HTML

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