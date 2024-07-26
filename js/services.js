document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.categoryOffert');
    const dynamicContent = document.getElementById('dynamicContent');

    const data = {
        logotypy: [
            { title: 'Projektowanie Logotypów', 
                desc: 'Tworzenie unikalnych logotypów. Redesign istniejących logotypów. Wersje logotypów dostosowane do różnych mediów (druk, digital).',
                price: 'Cena: <span class="price">od 1000 zł</span>' },
            { title: 'Identyfikacja Wizualna', 
                desc: 'Opracowanie kolorystyki marki. Wybór i projektowanie typografii. Projektowanie wzorów i grafik firmowych.',
                price: 'Cena: <span class="price">od 3000 zł</span>' }
        ],
        materialy: [
            { title: 'Projektowanie Ulotek', 
                desc: 'Ulotki reklamowe Ulotki informacyjne Ulotki produktowe',
                price: 'Cena: <span class="price">od 500 zł</span>' },
                { title: 'Plakaty i Banery', 
                    desc: 'Plakaty reklamowe Plakaty eventowe Banery internetowe',
                    price: 'Cena: <span class="price">od 800 zł</span>' },
                    { title: 'Foldery i Broszury', 
                        desc: 'Projektowanie folderów Projektowanie broszur informacyjnych Projektowanie katalogów produktowych',
                        price: 'Cena: <span class="price">od 1000 zł</span>' },
        ],
        grafiki: [
            { title: 'Grafiki na Posty', 
                desc: 'Projektowanie grafik na Facebooka Projektowanie grafik na Instagrama Projektowanie grafik na LinkedIn',
                price: 'Cena: <span class="price">od 200 zł za grafikę</span>' },
                { title: 'Banery na Social Media', 
                    desc: 'Banery na strony firmowe Banery na profile osobiste',
                    price: 'Cena: <span class="price">od 300 zł</span>' },
                    { title: 'Kompleksowe Kampanie Reklamowe', 
                        desc: 'Projektowanie zestawów grafik do kampanii Zarządzanie kampaniami reklamowymi',
                        price: 'Cena: <span class="price">od 1500 zł</span>' },
                
        ],
        uxui: [
            { title: 'Projektowanie Stron Internetowych', 
                desc: 'Projektowanie Stron Internetowych Strony firmowe Sklepy internetowe Blogi i strony osobiste',
                price: 'Cena: <span class="price">od 5000 zł</span>' },
                { title: 'Modernizacja Istniejących Stron', 
                    desc: 'Odświeżanie wyglądu Poprawa użyteczności (UX) Optymalizacja responsywności (RWD)',
                    price: 'Cena: <span class="price">od 3000 zł</span>' },
        ],
        brandbook: [
            { title: 'Księga Znaku', 
                desc: 'Wytyczne dotyczące używania logotypu Specyfikacja kolorów i typografii Zasady umieszczania logotypu w różnych mediach',
                price: 'Cena: <span class="price">od 2000 zł</span>' },
                { title: 'Brand Book', 
                    desc: 'Kompleksowy dokument identyfikacji wizualnej marki Zasady projektowania materiałów marketingowych Wytyczne dotyczące komunikacji wizualnej',
                    price: 'Cena: <span class="price">od 4000 zł</span>' },
        ],
        specjalne: [
            { title: 'Projekty na Zamówienie', 
                desc: 'Projekty dostosowane do indywidualnych potrzeb klienta Konsultacje i doradztwo graficzne',
                price: 'Cena: <span class="price">do ustalenia indywidualnie</span>' },
                { title: 'Rozliczenie godzinowe', 
                    desc: 'Projekty dostosowane do indywidualnych potrzeb klienta Konsultacje i doradztwo graficzne',
                    price: 'Cena: <span class="price">60 złotych za godzinę</span>' },
        ],
        pakiety: [
            { title: 'Pakiet Startowy Idealny dla nowych firm, które potrzebują podstawowej identyfikacji wizualnej.', 
                desc: 'Projektowanie logotypu Identyfikacja wizualna (kolorystyka, typografia) Projektowanie ulotki',
                price: 'Cena: <span class="price">4000 zł</span>' },
                { title: 'Pakiet Biznesowy Dla firm, które chcą profesjonalnie zarządzać swoją obecnością w mediach społecznościowych i marketingu.', 
                    desc: 'Projektowanie logotypu Identyfikacja wizualna Posty i banery na social media (5 grafik) Projektowanie ulotki Plakat lub baner',
                    price: 'Cena: <span class="price">7000 zł</span>' },
                    { title: 'Pakiet Kompleksowy Kompleksowe rozwiązanie dla firm, które chcą zbudować spójną i atrakcyjną markę.', 
                        desc: 'Projektowanie logotypu Identyfikacja wizualna Księga Znaku Brand Book Projektowanie strony internetowej UX/UI Posty i banery na social media (10 grafik) Kompleksowa kampania reklamowa w mediach społecznościowych',
                        price: 'Cena: <span class="price">15000 zł</span>' },
                        { title: 'Pakiet Strona Internetowa Dla firm, które potrzebują nowoczesnej i responsywnej strony internetowej.', 
                            desc: 'Projektowanie strony internetowej UX/UI Modernizacja istniejącej strony Kampania reklamowa online',
                            price: 'Cena: <span class="price">8000 zł</span>' },
        ]
    };

    categoryItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Deaktywacja wszystkich kategorii
            categoryItems.forEach(i => i.classList.remove('offertActive'));
            // Aktywacja klikniętej kategorii
            item.classList.add('offertActive');

            // Wyczyszczenie zawartości dynamicznej
            dynamicContent.innerHTML = '';

            // Pobranie danych dla wybranej kategorii
            const category = item.getAttribute('data-category');
            const categoryData = data[category];

            // Generowanie nowych kolumn na podstawie danych
            if (categoryData) {
                categoryData.forEach(offer => {
                    const column = document.createElement('div');
                    column.className = 'offertColumn';
                    
                    const title = document.createElement('div');
                    title.className = 'offertTitle';
                    title.textContent = offer.title;
                    
                    const desc = document.createElement('div');
                    desc.className = 'offertDesc';
                    desc.textContent = offer.desc;

                    const price = document.createElement('div');
                    price.className = 'offertPrice';
                    price.innerHTML = offer.price;
                    
                    column.appendChild(title);
                    column.appendChild(desc);
                    column.appendChild(price);
                    dynamicContent.appendChild(column);
                });
            }
        });
    });
});
