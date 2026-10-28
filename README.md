# INF.03 – Nauka do egzaminu

Darmowa strona do nauki do egzaminu zawodowego **INF.03** („Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych”). Materiał jest napisany prostym językiem i obejmuje wszystko, co pojawia się na egzaminie: **HTML, CSS, JavaScript, PHP i SQL**. Do tego są quizy w stylu części pisemnej i próbny test na czas.

> **English:** A free, Polish-language study website for the Polish vocational exam INF.03 (web development and databases). It covers HTML, CSS, JavaScript, PHP and SQL. It has lessons, code examples, exam-style quizzes and a timed mock test. It is plain HTML, CSS and JS, so no build step or server is needed.

## Spis treści

- [Co znajdziesz na stronie](#co-znajdziesz-na-stronie)
- [Jak uruchomić](#jak-uruchomić)
- [Jak korzystać](#jak-korzystać)
- [O egzaminie INF.03](#o-egzaminie-inf03)
- [Budowa projektu](#budowa-projektu)
- [Jak dodać lub poprawić treść](#jak-dodać-lub-poprawić-treść)
- [Źródła](#źródła)
- [Zastrzeżenie](#zastrzeżenie)
- [Licencja](#licencja)

## Co znajdziesz na stronie

| Dział          | Części | Tematy  | Pytania w quizie |
| -------------- | ------ | ------- | ---------------- |
| HTML           | 6      | 22      | 35               |
| CSS            | 6      | 24      | 35               |
| JavaScript     | 6      | 24      | 34               |
| PHP            | 6      | 22      | 34               |
| SQL            | 6      | 23      | 35               |
| Egzamin INF.03 | 3      | 13      | 25               |
| **Razem**      | **33** | **128** | **198**          |

Dział **Egzamin INF.03** opisuje przebieg egzaminu, plan nauki i ściągi. Zawiera też tematy z testu spoza pięciu języków: grafikę, multimedia, CMS, hosting, licencje, SEO, dostępność (WCAG) i algorytmy.

### Funkcje

- **Lekcje** z przykładami kodu. Kod jest kolorowany i ma przycisk „Kopiuj”.
- **Podgląd na żywo** dla przykładów HTML i CSS („Efekt w przeglądarce”).
- Ramki **„Na egzaminie”** pokazują, o co pyta CKE. Ramki **„Uwaga”** pokazują częste błędy.
- **Quiz do każdego działu.** Po każdej odpowiedzi widać wyjaśnienie.
- **Powtórka błędów.** Pytania z błędną odpowiedzią trafiają na osobną listę.
- **Próbny test:** 40 losowych pytań ze wszystkich działów, 60 minut i próg 50%, jak na prawdziwym egzaminie. Na końcu jest przegląd wszystkich odpowiedzi.
- **Śledzenie postępu.** Możesz oznaczać tematy jako przerobione i widzisz pasek postępu każdego działu.
- **Wyszukiwarka.** Działa też bez polskich znaków, np. „zlaczenie” znajdzie „złączenie”.
- **Ciemny motyw** i układ dopasowany do telefonu, tabletu i komputera.
- **Dostępność:** obsługa klawiatury, link „Przejdź do treści”, widoczny fokus i szacunek dla ustawienia „ogranicz ruch”.

Postęp zapisuje się w `localStorage`, czyli tylko w Twojej przeglądarce. Strona nie wysyła żadnych danych i nie używa ciasteczek ani zewnętrznych bibliotek.

## Jak uruchomić

Projekt nie wymaga instalacji, serwera ani internetu.

1. Pobierz repozytorium (**Code → Download ZIP**) albo sklonuj je:
   ```bash
   git clone <adres-repozytorium>
   ```
2. Otwórz plik `index.html` w przeglądarce.

## Jak korzystać

Proponowana kolejność nauki:

1. Przeczytaj temat i **przepisz przykłady sam** w edytorze. Samo czytanie to za mało.
2. Kliknij **Oznacz jako przerobione**, gdy rozumiesz temat.
3. Na końcu działu rozwiąż **quiz**.
4. Wracaj do **Powtórki błędów**, aż lista będzie pusta.
5. Raz w tygodniu zrób **próbny test** na czas.
6. Przed egzaminem przećwicz **całe zadanie praktyczne**: bazę, zapytania, stronę i skrypt.

### Skróty klawiszowe

| Klawisz             | Działanie                                      |
| ------------------- | ---------------------------------------------- |
| `/`                 | Przejście do wyszukiwarki                      |
| `1`–`4` lub `A`–`D` | Wybór odpowiedzi w quizie i teście             |
| `Enter`             | Następne pytanie w quizie                      |
| `←` `→`             | Poprzednie i następne pytanie w próbnym teście |
| `Esc`               | Zamknięcie menu na telefonie                   |

## O egzaminie INF.03

|             | Część pisemna                      | Część praktyczna                                          |
| ----------- | ---------------------------------- | --------------------------------------------------------- |
| Forma       | test na komputerze                 | zadanie przy komputerze                                   |
| Zadania     | 40 pytań, 4 odpowiedzi, 1 poprawna | baza danych, zapytania SQL, strona WWW, skrypt PHP lub JS |
| Czas        | 60 minut                           | 150 minut                                                 |
| Próg zdania | 50%                                | 75%                                                       |

Szczegóły, czyli terminy, organizację i zmiany w przepisach, zawsze sprawdzaj na stronie [CKE](https://cke.gov.pl) i w swojej szkole.

## Budowa projektu

```
.
├── index.html   szkielet strony
├── style.css    wygląd (ciemny motyw, responsywność)
├── script.js    cała treść kursu (stała DANE) i logika aplikacji
├── README.md    ten opis
└── LICENSE      licencja MIT
```

`script.js` składa się z dwóch części:

1. **`const DANE = [...]`** to treść wszystkich działów, tematów i pytań w formacie JSON.
2. **Logika aplikacji** obejmuje routing przez adres `#/…`, menu, quizy, próbny test, wyszukiwarkę i zapis postępu.

Adresy podstron:

| Adres                | Strona          |
| -------------------- | --------------- |
| `#/`                 | strona główna   |
| `#/m/html`           | przegląd działu |
| `#/t/html-struktura` | temat           |
| `#/quiz/sql`         | quiz działu     |
| `#/quiz/bledy`       | powtórka błędów |
| `#/test`             | próbny test     |
| `#/szukaj?q=join`    | wyszukiwanie    |

## Jak dodać lub poprawić treść

Całą treść edytuje się w stałej `DANE` na początku pliku `script.js`. Każdy dział wygląda tak:

```json
{
  "id": "sql",
  "nazwa": "SQL",
  "opis": "Krótki opis działu.",
  "dzialy": [
    {
      "id": "sql-select",
      "tytul": "Pobieranie danych",
      "tematy": [
        {
          "id": "sql-where",
          "tytul": "Warunki WHERE",
          "skrot": "Jedno zdanie streszczenia.",
          "tresc": [
            { "typ": "p", "tekst": "Akapit z `kodem` i **pogrubieniem**." },
            { "typ": "kod", "jezyk": "sql", "kod": "SELECT * FROM klienci;" }
          ]
        }
      ]
    }
  ],
  "quiz": [
    {
      "pytanie": "Treść pytania?",
      "odpowiedzi": ["A", "B", "C", "D"],
      "poprawna": 0,
      "wyjasnienie": "Dlaczego A jest dobrą odpowiedzią."
    }
  ]
}
```

### Typy bloków w `tresc`

| `typ`     | Pola                                                                            | Co wyświetla                                 |
| --------- | ------------------------------------------------------------------------------- | -------------------------------------------- |
| `p`       | `tekst`                                                                         | akapit                                       |
| `h`       | `tekst`                                                                         | śródtytuł                                    |
| `lista`   | `elementy`                                                                      | lista punktowana                             |
| `kroki`   | `elementy`                                                                      | lista numerowana                             |
| `kod`     | `jezyk` (`html`, `css`, `js`, `php`, `sql`, `text`), `kod`, opcjonalnie `tytul` | blok kodu z przyciskiem „Kopiuj”             |
| `wynik`   | `html`                                                                          | podgląd efektu w przeglądarce (bez skryptów) |
| `tabela`  | `naglowki`, `wiersze`                                                           | tabela                                       |
| `egzamin` | `tekst`                                                                         | ramka „Na egzaminie”                         |
| `uwaga`   | `tekst`                                                                         | ramka „Uwaga”                                |

W tekstach działa tylko proste formatowanie: `` `kod` `` i `**pogrubienie**`.

Zasady pisania treści:

- Każde `id` musi być unikalne, pisane małymi literami i zaczynać się od nazwy działu, np. `css-float`.
- W quizie są zawsze **4 odpowiedzi**. `poprawna` to numer dobrej odpowiedzi od `0` do `3`.
- Kod w projekcie i w przykładach **nie zawiera komentarzy**. Objaśnienia piszemy w osobnych akapitach.

Poprawki i nowe pytania są mile widziane. Zgłaszaj je przez **Issues** albo **Pull Requests**.

## Źródła

Treść powstała na podstawie materiałów CKE, prawdziwych arkuszy egzaminacyjnych i dokumentacji technicznej:

- [Informator CKE – część ogólna, formuła 2019](https://oke.waw.pl/wp-content/uploads/OKE_WARSZAWA/EE/EE_Zawodowy/Informatory/Informatory_Czesc-ogolna__Formula-2019.pdf)
- Arkusze praktyczne INF.03 z lat 2023–2025 ([zawodowe.edu.pl](https://zawodowe.edu.pl))
- Bazy pytań testowych: [egzamin-informatyk.pl](https://egzamin-informatyk.pl/testy-inf03-ee09-programowanie-bazy-danych/), [zawodowe.edu.pl](https://zawodowe.edu.pl)
- Dokumentacja: [MDN Web Docs](https://developer.mozilla.org/pl/), [php.net](https://www.php.net/manual/pl/), [MariaDB](https://mariadb.com/kb/en/), [W3Schools](https://www.w3schools.com)

Pytania w quizach są napisane własnymi słowami i wzorowane na stylu egzaminu. Nie są kopiami oficjalnych pytań.

## Zastrzeżenie

To nieoficjalny projekt do samodzielnej nauki. Nie jest powiązany z Centralną Komisją Egzaminacyjną (CKE) ani okręgowymi komisjami egzaminacyjnymi (OKE). Treść może zawierać błędy. Jeśli jakiś znajdziesz, zgłoś go w **Issues**.

## Licencja

Projekt jest udostępniony na licencji [MIT](LICENSE). Możesz go używać, kopiować, zmieniać i rozpowszechniać, także w szkole i na zajęciach. Warunek: zachowaj informację o autorze i treść licencji.

Powodzenia na egzaminie!
