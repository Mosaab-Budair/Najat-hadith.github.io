// تعريف الأحاديث النبوية الخاصة بالصف السابع
const hadiths = [
    { text: "حديث 19: الإيمان بالقضاء والقدر", link: "hadith19.html" },
    { text: "حديث 20: الحياء من الإيمان " ,link: "hadith20.html" },
    { text: "حديث 21: الاستقامه بالإسلام", link: "hadith21.html" },
    { text: "حديث 22: الطريق إلى الجنة", link: "hadith22.html" },
    { text: "حديث 23: جوامع الخير", link: "hadith23.html" }, // Added missing comma here
    { text: "حديث 24: من فضل الله على الناس", link: "hadith24.html" },
    { text: "حديث 25: فضل الذكر", link: "hadith25.html" },
    { text: "حديث 26: كثرة طرق الخير", link: "hadith26.html" },
    { text: "حديث 27: تعريف البر والإثم", link: "hadith27.html" },
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
