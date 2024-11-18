const hadiths = [
    { text: "حديث 1: إنما الأعمال بالنيات.", link: "hadith1.html" },
    { text: "حديث 2: مراتب الدين", link: "hadith2.html" },
    { text: "حديث 3: أركان الإسلام", link: "hadith3.html" },
    { text: "حديث 4: مراحل الخلق", link: "hadith4.html" },
    { text: "حديث 5: النهي عن الابتداع في الدين", link: "hadith5.html" },
    { text: "حديث 6: البعد عن مواطن الشبهات", link: "hadith6.html" },
    { text: "حديث 7: الدين النصيحه", link: "hadith7.html" },
    { text: "حديث 8: حرمة دم المسلم وماله", link: "hadith8.html" },
    { text: " حديث 9: النهي عن كثرة السؤال والتشدد", link: "hadith9.html" }
];

// دالة لعرض الأحاديث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const hadithList = document.getElementById('hadith-list');

    // إضافة الأحاديث إلى القائمة
    hadiths.forEach(hadith => {
        const li = document.createElement('li');
        li.className = 'hadith';
        li.textContent = hadith.text;

        // توجيه المستخدم للصفحة الخاصة بالحديث عند النقر
        li.addEventListener('click', () => {
            window.location.href = hadith.link; // التوجيه إلى صفحة الحديث
        });

        hadithList.appendChild(li);
    });
});

