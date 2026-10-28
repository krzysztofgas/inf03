const DANE = [
  {
    id: "html",
    nazwa: "HTML",
    opis: "Język znaczników HTML5 od podstaw: struktura dokumentu, tekst, listy, odnośniki, obrazy, tabele, formularze i układ strony taki jak w arkuszach egzaminu INF.03.",
    dzialy: [
      {
        id: "html-podstawy",
        tytul: "Podstawy dokumentu HTML",
        tematy: [
          {
            id: "html-struktura",
            tytul: "Struktura dokumentu HTML",
            skrot:
              "Szkielet każdej strony: `<!DOCTYPE html>`, `<html lang>`, `<head>` z `<meta charset>` i `<title>` oraz `<body>`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "HTML (HyperText Markup Language) to **język znaczników**. Opisuje, co znajduje się na stronie: nagłówki, akapity, obrazy, tabele. Nie jest językiem programowania — nie ma w nim pętli ani warunków.",
              },
              {
                typ: "p",
                tekst:
                  "Każdy dokument HTML5 ma ten sam szkielet. Warto znać go na pamięć, bo na egzaminie praktycznym piszesz go zawsze na początku.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Moja strona</title>\n</head>\n<body>\n  <h1>Witaj na mojej stronie</h1>\n  <p>To jest pierwszy akapit.</p>\n</body>\n</html>',
                tytul: "Minimalny dokument HTML5",
              },
              {
                typ: "tabela",
                naglowki: ["Element", "Do czego służy"],
                wiersze: [
                  [
                    "`<!DOCTYPE html>`",
                    "Deklaracja typu dokumentu. Mówi przeglądarce, że to HTML5. Zawsze w pierwszej linii.",
                  ],
                  [
                    '`<html lang="pl">`',
                    "Główny element (korzeń) strony. Atrybut `lang` określa język treści.",
                  ],
                  [
                    "`<head>`",
                    "Nagłówek dokumentu: informacje dla przeglądarki, niewidoczne w oknie strony.",
                  ],
                  [
                    '`<meta charset="UTF-8">`',
                    "Kodowanie znaków. Dzięki UTF-8 polskie litery (ą, ę, ź) wyświetlają się poprawnie.",
                  ],
                  [
                    '`<meta name="viewport">`',
                    "Dopasowanie strony do szerokości ekranu telefonu.",
                  ],
                  [
                    "`<title>`",
                    "Tytuł strony widoczny na **karcie przeglądarki** i w wynikach wyszukiwania.",
                  ],
                  ["`<body>`", "Treść widoczna dla użytkownika."],
                ],
              },
              {
                typ: "h",
                tekst: "Inne elementy `<meta>`",
              },
              {
                typ: "lista",
                elementy: [
                  '`<meta name="description" content="…">` — opis strony dla wyszukiwarek.',
                  '`<meta name="keywords" content="…">` — słowa kluczowe.',
                  '`<meta name="author" content="…">` — autor strony.',
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  'Arkusz praktyczny prawie zawsze wymaga: języka polskiego (`lang="pl"`), kodowania UTF-8 i konkretnego tytułu na karcie. W teście często pada pytanie: „Który znacznik określa tytuł widoczny na karcie przeglądarki?” — odpowiedź: `<title>`, a nie `<h1>` ani `<header>`.',
              },
              {
                typ: "uwaga",
                tekst:
                  "`<title>` umieszczamy w `<head>`, a nie w `<body>`. Nagłówek `<h1>` to coś zupełnie innego — jest widoczny w treści strony.",
              },
            ],
          },
          {
            id: "html-skladnia",
            tytul: "Znaczniki, atrybuty i komentarze",
            skrot:
              "Jak zbudowany jest znacznik, czym są atrybuty i elementy puste oraz jak poprawnie zagnieżdżać znaczniki.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Większość elementów HTML ma **znacznik otwierający** i **zamykający**. Zamykający ma ukośnik: `<p>` … `</p>`. Treść leży pomiędzy nimi.",
              },
              {
                typ: "p",
                tekst:
                  '**Atrybuty** dopisujemy w znaczniku otwierającym w postaci `nazwa="wartość"`. Dodają informacje lub zmieniają działanie elementu.',
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<p class="wazne" id="opis" title="Podpowiedź">Tekst akapitu</p>\n<a href="kontakt.html">Kontakt</a>\n<img src="kot.jpg" alt="Rudy kot">',
              },
              {
                typ: "h",
                tekst: "Elementy puste (samozamykające)",
              },
              {
                typ: "p",
                tekst:
                  "Niektóre elementy nie mają treści ani znacznika zamykającego. Najważniejsze to: `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`. W HTML5 można je zapisać jako `<br>` lub `<br />` — obie formy są poprawne.",
              },
              {
                typ: "h",
                tekst: "Atrybuty globalne",
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut", "Znaczenie"],
                wiersze: [
                  [
                    "`id`",
                    "Unikalny identyfikator elementu. Na stronie może wystąpić **tylko raz**. W CSS: `#nazwa`.",
                  ],
                  [
                    "`class`",
                    "Klasa — może być nadana wielu elementom. Element może mieć kilka klas oddzielonych spacją. W CSS: `.nazwa`.",
                  ],
                  [
                    "`style`",
                    "Styl CSS wpisany bezpośrednio w element (styl lokalny, inline).",
                  ],
                  ["`title`", "Dymek z podpowiedzią po najechaniu kursorem."],
                  ["`lang`", "Język treści elementu."],
                  ["`hidden`", "Ukrywa element."],
                ],
              },
              {
                typ: "h",
                tekst: "Poprawne zagnieżdżanie",
              },
              {
                typ: "p",
                tekst:
                  "Znaczniki zamykamy w odwrotnej kolejności niż otwieramy — jak nawiasy. Element otwarty jako ostatni zamykamy jako pierwszy.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<p>To jest <strong>bardzo <em>ważny</em></strong> tekst.</p>",
                tytul: "Dobrze",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<p>To jest <strong>bardzo <em>ważny</strong></em> tekst.</p>",
                tytul: "Źle — znaczniki się krzyżują",
              },
              {
                typ: "h",
                tekst: "Komentarze",
              },
              {
                typ: "p",
                tekst:
                  "Komentarz w HTML zapisujemy jako `<!-- tekst komentarza -->`. Przeglądarka go nie wyświetla, ale jest widoczny w źródle strony. Komentarz nie może zawierać podwójnego myślnika w środku.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie testowe: „Który zapis jest komentarzem w HTML?” — `<!-- … -->`. Nie myl z CSS (`/* … */`) ani PHP/JS (`//`).",
              },
              {
                typ: "uwaga",
                tekst:
                  "Wielkość liter w nazwach znaczników nie ma znaczenia (`<P>` = `<p>`), ale przyjęło się pisać **małymi literami**. Wartości atrybutów zawsze bierz w cudzysłów.",
              },
            ],
          },
          {
            id: "html-blokowe-liniowe",
            tytul: "Elementy blokowe i liniowe, div i span",
            skrot:
              "Element blokowy zaczyna się od nowej linii i zajmuje całą szerokość, liniowy płynie w tekście; `<div>` i `<span>` to pojemniki bez znaczenia.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Elementy HTML dzielą się na dwie główne grupy, zależnie od tego, jak układają się na stronie.",
              },
              {
                typ: "tabela",
                naglowki: [
                  "Cecha",
                  "Element blokowy (block)",
                  "Element liniowy (inline)",
                ],
                wiersze: [
                  [
                    "Nowa linia",
                    "Zawsze zaczyna się od nowej linii",
                    "Nie łamie linii, płynie razem z tekstem",
                  ],
                  [
                    "Szerokość",
                    "Zajmuje całą dostępną szerokość",
                    "Tylko tyle, ile treść",
                  ],
                  ["`width`/`height` w CSS", "Działają", "Nie działają"],
                  [
                    "Przykłady",
                    "`<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<header>`, `<section>`",
                    "`<span>`, `<a>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<img>`, `<input>`, `<br>`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Pojemniki `<div>` i `<span>`",
              },
              {
                typ: "lista",
                elementy: [
                  "`<div>` — blokowy pojemnik do grupowania większych fragmentów (np. bloki układu: baner, panel, stopka).",
                  "`<span>` — liniowy pojemnik do oznaczenia fragmentu tekstu, np. żeby nadać mu kolor.",
                  "Same z siebie nic nie zmieniają w wyglądzie — wygląd nadaje im CSS przez `id` lub `class`.",
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<div id="panel">\n  <p>Cena: <span class="cena">49 zł</span></p>\n</div>',
              },
              {
                typ: "wynik",
                html: '<div style="border:2px solid #3a7bd5;padding:6px;">To jest div (blok)</div>\n<div style="border:2px solid #3a7bd5;padding:6px;margin-top:4px;">Drugi div — nowa linia</div>\n<p>Tekst z <span style="background:#ffd54f;">elementem span</span> w środku i <span style="background:#a5d6a7;">drugim spanem</span>.</p>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe pytanie: „Który z elementów jest liniowy?” Odpowiedź: `<span>`, `<a>`, `<strong>` itp. Pułapki: `<div>`, `<p>`, `<h2>`, `<li>` są blokowe.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Wewnątrz elementu liniowego nie powinno się umieszczać elementów blokowych, np. `<span><div>…</div></span>` jest błędem. Wyjątkiem w HTML5 jest `<a>`, który może obejmować bloki.",
              },
            ],
          },
          {
            id: "html-walidacja",
            tytul: "Walidacja i poprawność kodu",
            skrot:
              "Walidator W3C sprawdza, czy kod jest zgodny ze standardem HTML; pomaga znaleźć niezamknięte znaczniki i brakujące atrybuty.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Walidacja** to sprawdzenie, czy kod HTML (lub CSS) jest zgodny ze standardem. Robi to **walidator W3C** — darmowe narzędzie online organizacji W3C (World Wide Web Consortium), która tworzy standardy sieci.",
              },
              {
                typ: "lista",
                elementy: [
                  "HTML: validator.w3.org — można podać adres strony, wysłać plik lub wkleić kod.",
                  "CSS: jigsaw.w3.org/css-validator.",
                  "Walidator **nie** sprawdza wyglądu ani działania skryptów — tylko poprawność składni.",
                ],
              },
              {
                typ: "h",
                tekst: "Najczęstsze błędy wykrywane przez walidator",
              },
              {
                typ: "lista",
                elementy: [
                  "Brak `<!DOCTYPE html>` lub `<title>`.",
                  "Niezamknięty znacznik albo błędne zagnieżdżenie.",
                  "Brak atrybutu `alt` w `<img>`.",
                  "Powtórzony `id` na jednej stronie.",
                  "Nieznany znacznik lub atrybut (np. przestarzały `<font>`, `<center>`).",
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<img src="logo.png">\n<p>Akapit bez zamknięcia\n<div id="menu"></div>\n<div id="menu"></div>',
                tytul: "Kod z trzema błędami",
              },
              {
                typ: "p",
                tekst:
                  'W powyższym kodzie: obraz nie ma `alt`, akapit nie jest zamknięty, a `id="menu"` występuje dwa razy.',
              },
              {
                typ: "h",
                tekst: "Przestarzałe znaczniki",
              },
              {
                typ: "p",
                tekst:
                  "W HTML5 nie używa się już znaczników tylko do wyglądu: `<font>`, `<center>`, `<big>`, `<strike>`, `<frame>`. Wygląd ustawia się w CSS.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Do sprawdzenia poprawności kodu HTML zgodnie ze standardem służy…” — walidator W3C. Na egzaminie praktycznym kod nie musi przejść walidacji, ale oceniane jest m.in. poprawne zamykanie znaczników.",
              },
            ],
          },
        ],
      },
      {
        id: "html-tekst",
        tytul: "Tekst, encje i listy",
        tematy: [
          {
            id: "html-naglowki-akapity",
            tytul: "Nagłówki, akapity, br i hr",
            skrot:
              "Nagłówki `<h1>`-`<h6>`, akapit `<p>`, złamanie linii `<br>` i pozioma linia `<hr>`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Nagłówki mają 6 poziomów: od `<h1>` (najważniejszy, największy) do `<h6>` (najmniejszy). Tworzą hierarchię treści, jak rozdziały w książce.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<h1>Portal wędkarski</h1>\n<h2>Ryby słodkowodne</h2>\n<h3>Szczupak</h3>\n<p>Szczupak to drapieżna ryba.<br>Żyje w jeziorach i rzekach.</p>\n<hr>\n<p>Kolejny akapit po linii poziomej.</p>",
              },
              {
                typ: "wynik",
                html: '<h1 style="margin:4px 0;">Portal wędkarski</h1>\n<h2 style="margin:4px 0;">Ryby słodkowodne</h2>\n<h3 style="margin:4px 0;">Szczupak</h3>\n<p>Szczupak to drapieżna ryba.<br>Żyje w jeziorach i rzekach.</p>\n<hr>\n<p>Kolejny akapit po linii poziomej.</p>',
              },
              {
                typ: "tabela",
                naglowki: ["Znacznik", "Znaczenie"],
                wiersze: [
                  ["`<h1>`…`<h6>`", "Nagłówki poziomu 1-6"],
                  [
                    "`<p>`",
                    "Akapit (paragraf) — blok tekstu z odstępem nad i pod",
                  ],
                  [
                    "`<br>`",
                    "Złamanie linii (nowa linia wewnątrz akapitu), element pusty",
                  ],
                  [
                    "`<hr>`",
                    "Pozioma linia — tematyczne oddzielenie treści, element pusty",
                  ],
                  [
                    "`<pre>`",
                    "Tekst preformatowany — zachowuje spacje i entery, czcionka o stałej szerokości",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Przeglądarka **ignoruje** wielokrotne spacje i entery w kodzie — zamienia je na jedną spację. Dlatego do nowej linii używa się `<br>`, a do nowego akapitu `<p>`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "W arkuszach często spotkasz polecenie: „nagłówek trzeciego stopnia z tekstem …” — to `<h3>`. „Nagłówek pierwszego stopnia” to `<h1>`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Nie używaj `<br>` do robienia odstępów między akapitami ani nagłówków tylko po to, żeby powiększyć tekst. Wielkość ustawia się w CSS.",
              },
            ],
          },
          {
            id: "html-formatowanie",
            tytul: "Formatowanie tekstu",
            skrot:
              "Pogrubienie, kursywa, podkreślenie, indeksy górne i dolne, wyróżnienie, cytaty i kod.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "HTML ma kilka znaczników do wyróżniania fragmentów tekstu. Część z nich ma **znaczenie semantyczne** (mówi, że tekst jest ważny), a część tylko zmienia wygląd.",
              },
              {
                typ: "tabela",
                naglowki: ["Znacznik", "Efekt", "Znaczenie"],
                wiersze: [
                  ["`<b>`", "pogrubienie", "tylko wizualne"],
                  [
                    "`<strong>`",
                    "pogrubienie",
                    "tekst **ważny** (semantyczny)",
                  ],
                  ["`<i>`", "kursywa", "tylko wizualne (np. termin obcy)"],
                  ["`<em>`", "kursywa", "akcent, nacisk (semantyczny)"],
                  ["`<u>`", "podkreślenie", "tekst wyróżniony"],
                  ["`<sub>`", "indeks dolny", "np. H₂O"],
                  ["`<sup>`", "indeks górny", "np. m², x³"],
                  [
                    "`<mark>`",
                    "zaznaczenie (żółte tło)",
                    "fragment wyróżniony",
                  ],
                  ["`<small>`", "mniejszy tekst", "np. drobny druk"],
                  ["`<del>`", "przekreślenie", "tekst usunięty"],
                  ["`<ins>`", "podkreślenie", "tekst wstawiony"],
                  ["`<code>`", "czcionka stałej szerokości", "fragment kodu"],
                  ["`<q>`", "tekst w cudzysłowie", "krótki cytat"],
                  ["`<blockquote>`", "wcięty blok", "dłuższy cytat (blokowy)"],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<p>Wzór wody to H<sub>2</sub>O, a pole wynosi 25 m<sup>2</sup>.</p>\n<p><strong>Uwaga!</strong> Promocja trwa <em>tylko dziś</em>.</p>\n<p>Cena: <del>100 zł</del> <ins>80 zł</ins>, <mark>oferta dnia</mark>.</p>",
              },
              {
                typ: "wynik",
                html: "<p>Wzór wody to H<sub>2</sub>O, a pole wynosi 25 m<sup>2</sup>.</p>\n<p><strong>Uwaga!</strong> Promocja trwa <em>tylko dziś</em>.</p>\n<p>Cena: <del>100 zł</del> <ins>80 zł</ins>, <mark>oferta dnia</mark>.</p>",
              },
              {
                typ: "egzamin",
                tekst:
                  "Częste pytania: „Który znacznik zapisze 2 w m² jako indeks górny?” — `<sup>`. „Indeks dolny we wzorze CO₂?” — `<sub>`. Zapamiętaj: **sup** = super (nad), **sub** = pod.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`<b>` i `<strong>` wyglądają tak samo, ale `<strong>` oznacza ważność treści (np. dla czytników ekranu). Podobnie `<i>` i `<em>`.",
              },
            ],
          },
          {
            id: "html-encje",
            tytul: "Znaki specjalne (encje)",
            skrot:
              "Encje pozwalają wstawić znaki zarezerwowane jak `<`, `>`, `&` oraz twardą spację `&nbsp;` i symbol `&copy;`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Niektóre znaki mają w HTML specjalne znaczenie — np. `<` rozpoczyna znacznik. Żeby wyświetlić je jako zwykły tekst, używamy **encji**. Encja zaczyna się od `&`, a kończy średnikiem `;`.",
              },
              {
                typ: "tabela",
                naglowki: ["Encja", "Znak", "Opis"],
                wiersze: [
                  ["`&lt;`", "<", "mniejszy niż (less than)"],
                  ["`&gt;`", ">", "większy niż (greater than)"],
                  ["`&amp;`", "&", "ampersand"],
                  ["`&quot;`", '"', "cudzysłów"],
                  [
                    "`&nbsp;`",
                    "(spacja)",
                    "twarda spacja — nie łamie linii, nie jest scalana z innymi",
                  ],
                  ["`&copy;`", "©", "znak praw autorskich"],
                  ["`&reg;`", "®", "znak zastrzeżony"],
                  ["`&euro;`", "€", "euro"],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<p>Znacznik akapitu to &lt;p&gt;.</p>\n<p>Kowalski&nbsp;&amp;&nbsp;Syn &copy; 2025</p>",
              },
              {
                typ: "wynik",
                html: "<p>Znacznik akapitu to &lt;p&gt;.</p>\n<p>Kowalski&nbsp;&amp;&nbsp;Syn &copy; 2025</p>",
              },
              {
                typ: "p",
                tekst:
                  "Encję można też zapisać numerem: `&#169;` to również ©.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Na teście: „Aby wyświetlić znak < na stronie, należy użyć…” — `&lt;`. „Twarda spacja to…” — `&nbsp;` (non-breaking space).",
              },
            ],
          },
          {
            id: "html-listy",
            tytul: "Listy",
            skrot:
              "Lista nienumerowana `<ul>`, numerowana `<ol>` z atrybutami `type`, `start`, `reversed`, lista definicji `<dl>` i listy zagnieżdżone.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Listy w HTML są trzy. Każdy element listy (punktowanej i numerowanej) zapisujemy w `<li>` (list item).",
              },
              {
                typ: "h",
                tekst: "Lista nienumerowana i numerowana",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<ul>\n  <li>Mleko</li>\n  <li>Chleb</li>\n</ul>\n<ol type="A" start="3">\n  <li>Wstęp</li>\n  <li>Rozwinięcie</li>\n</ol>',
              },
              {
                typ: "wynik",
                html: '<ul><li>Mleko</li><li>Chleb</li></ul>\n<ol type="A" start="3"><li>Wstęp</li><li>Rozwinięcie</li></ol>',
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut `<ol>`", "Wartości / działanie"],
                wiersze: [
                  [
                    "`type`",
                    "`1` (cyfry, domyślnie), `a` (małe litery), `A` (wielkie litery), `i` (rzymskie małe), `I` (rzymskie wielkie)",
                  ],
                  ["`start`", 'Od jakiej liczby zacząć, np. `start="5"`'],
                  ["`reversed`", "Numeracja malejąca"],
                ],
              },
              {
                typ: "h",
                tekst: "Lista zagnieżdżona",
              },
              {
                typ: "p",
                tekst:
                  "Listę wewnętrzną wstawiamy **wewnątrz** elementu `<li>`, nie bezpośrednio w `<ul>`.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<ol>\n  <li>Owoce\n    <ul>\n      <li>jabłka</li>\n      <li>gruszki</li>\n    </ul>\n  </li>\n  <li>Warzywa</li>\n</ol>",
              },
              {
                typ: "wynik",
                html: "<ol><li>Owoce<ul><li>jabłka</li><li>gruszki</li></ul></li><li>Warzywa</li></ol>",
              },
              {
                typ: "h",
                tekst: "Lista definicji",
              },
              {
                typ: "p",
                tekst:
                  "`<dl>` to lista definicji: `<dt>` — termin, `<dd>` — jego opis.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<dl>\n  <dt>HTML</dt>\n  <dd>Język znaczników do tworzenia stron.</dd>\n  <dt>CSS</dt>\n  <dd>Kaskadowe arkusze stylów.</dd>\n</dl>",
              },
              {
                typ: "egzamin",
                tekst:
                  'Listy są w prawie każdym arkuszu praktycznym (np. „lista numerowana z elementami …” albo lista generowana przez PHP z bazy). W teście: „Która lista wyświetli numerację rzymską?” — `<ol type="I">`. Wygląd punktorów `<ul>` zmienia się w CSS przez `list-style-type`.',
              },
              {
                typ: "uwaga",
                tekst:
                  "Bezpośrednim dzieckiem `<ul>` i `<ol>` może być tylko `<li>`.",
              },
            ],
          },
        ],
      },
      {
        id: "html-linki-media",
        tytul: "Odnośniki, grafika i multimedia",
        tematy: [
          {
            id: "html-odnosniki",
            tytul: "Odnośniki (linki)",
            skrot:
              'Element `<a href>`: linki do stron, plików, adresów e-mail, kotwice `#` i otwieranie w nowej karcie `target="_blank"`.',
            tresc: [
              {
                typ: "p",
                tekst:
                  "Odnośnik tworzy element `<a>` (anchor). Najważniejszy atrybut to `href` — adres, do którego prowadzi link.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<a href="https://www.cke.gov.pl">Strona CKE</a>\n<a href="kontakt.html">Kontakt</a>\n<a href="dokumenty/regulamin.pdf">Pobierz regulamin</a>\n<a href="mailto:biuro@firma.pl">Napisz do nas</a>\n<a href="tel:+48123456789">Zadzwoń</a>\n<a href="https://pl.wikipedia.org" target="_blank">Wikipedia w nowej karcie</a>',
              },
              {
                typ: "tabela",
                naglowki: ["Zapis `href`", "Dokąd prowadzi"],
                wiersze: [
                  [
                    "`https://…`",
                    "Adres bezwzględny — inna strona w internecie",
                  ],
                  [
                    "`kontakt.html`",
                    "Ścieżka względna — plik w tym samym folderze",
                  ],
                  [
                    "`../index.html`",
                    "Plik w folderze nadrzędnym (`..` = poziom wyżej)",
                  ],
                  [
                    "`mailto:adres@poczta.pl`",
                    "Otwiera program pocztowy z adresem odbiorcy",
                  ],
                  [
                    "`tel:+48…`",
                    "Rozpoczyna połączenie telefoniczne (telefony)",
                  ],
                  [
                    "`#kontakt`",
                    'Kotwica — przewija do elementu z `id="kontakt"` na tej samej stronie',
                  ],
                  [
                    "`strona.html#cennik`",
                    "Inna strona i od razu element `#cennik`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Atrybut `target`",
              },
              {
                typ: "lista",
                elementy: [
                  "`_blank` — otwiera link w nowej karcie lub oknie.",
                  "`_self` — w tej samej karcie (domyślnie).",
                  "`_parent`, `_top` — dotyczą ramek.",
                ],
              },
              {
                typ: "h",
                tekst: "Kotwice (linki wewnętrzne)",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<a href="#stopka">Przejdź na dół</a>\n<footer id="stopka">Kontakt: 123 456 789</footer>',
              },
              {
                typ: "h",
                tekst: "Obraz jako link i pobieranie pliku",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<a href="galeria.html"><img src="miniatura.jpg" alt="Galeria"></a>\n<a href="kwerendy.txt" download>Pobierz kwerendy</a>',
              },
              {
                typ: "egzamin",
                tekst:
                  'Typowe polecenia z arkusza: „odnośnik do pliku `kwerendy.txt`”, „odnośnik otwierający stronę w nowej karcie” (`target="_blank"`), „adres e-mail jako odnośnik” (`mailto:`). Pamiętaj, że `href` to atrybut `<a>`, a `src` — `<img>`.',
              },
              {
                typ: "uwaga",
                tekst:
                  "Kotwica odwołuje się do atrybutu `id` elementu docelowego, a w `href` piszemy przed nim znak `#`.",
              },
            ],
          },
          {
            id: "html-obrazy",
            tytul: "Obrazy i formaty graficzne",
            skrot:
              "Element `<img>` z atrybutami `src`, `alt`, `width`, `height`, `title` oraz cechy formatów JPG, PNG, GIF, SVG, WebP i BMP.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Obraz wstawiamy elementem pustym `<img>`. Dwa atrybuty są obowiązkowe: `src` (ścieżka do pliku) i `alt` (tekst alternatywny).",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<img src="obrazy/szczupak.jpg" alt="Szczupak w jeziorze" width="300" height="200" title="Kliknij, aby powiększyć">',
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut", "Znaczenie"],
                wiersze: [
                  ["`src`", "Ścieżka do pliku graficznego (source)"],
                  [
                    "`alt`",
                    "Tekst alternatywny: wyświetla się, gdy obraz się nie wczyta; czytają go czytniki ekranu i wyszukiwarki",
                  ],
                  [
                    "`width`, `height`",
                    "Szerokość i wysokość w pikselach (bez jednostki `px`)",
                  ],
                  ["`title`", "Dymek z podpowiedzią po najechaniu myszą"],
                  [
                    '`loading="lazy"`',
                    "Wczytanie obrazu dopiero, gdy będzie blisko widoku",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Formaty graficzne",
              },
              {
                typ: "tabela",
                naglowki: [
                  "Format",
                  "Kompresja",
                  "Przezroczystość",
                  "Animacja",
                  "Zastosowanie",
                ],
                wiersze: [
                  ["JPG / JPEG", "stratna", "nie", "nie", "zdjęcia"],
                  [
                    "PNG",
                    "bezstratna",
                    "tak (kanał alfa)",
                    "nie",
                    "grafiki, logo, zrzuty ekranu",
                  ],
                  [
                    "GIF",
                    "bezstratna, max 256 kolorów",
                    "tak (1 kolor)",
                    "tak",
                    "proste animacje, ikony",
                  ],
                  [
                    "SVG",
                    "grafika wektorowa (XML)",
                    "tak",
                    "tak",
                    "logo, ikony — skalowanie bez utraty jakości",
                  ],
                  [
                    "WebP",
                    "stratna lub bezstratna",
                    "tak",
                    "tak",
                    "nowoczesny format do stron",
                  ],
                  [
                    "BMP",
                    "brak kompresji",
                    "nie",
                    "nie",
                    "duże pliki, nie do stron",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Obraz z podpisem",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<figure>\n  <img src="tatry.jpg" alt="Widok na Tatry">\n  <figcaption>Tatry zimą</figcaption>\n</figure>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Bardzo częste pytanie: „Który atrybut określa tekst alternatywny dla obrazu?” — `alt`. Inne: „Który format obsługuje animację?” — GIF. „Format wektorowy?” — SVG. „Kompresja stratna?” — JPG. W arkuszu praktycznym każdy obraz musi mieć `alt` z podanym tekstem.",
              },
              {
                typ: "uwaga",
                tekst:
                  'Atrybuty `width` i `height` podajemy w HTML jako samą liczbę (`width="300"`). Jeśli podasz tylko jeden z nich, przeglądarka zachowa proporcje obrazu.',
              },
            ],
          },
          {
            id: "html-multimedia",
            tytul: "Audio i wideo",
            skrot:
              "Elementy `<audio>` i `<video>` z atrybutami `controls`, `autoplay`, `loop`, `muted`, `poster` oraz źródła `<source>`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "HTML5 pozwala osadzić dźwięk i film bez dodatkowych wtyczek. Służą do tego elementy `<audio>` i `<video>`.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<audio src="muzyka.mp3" controls></audio>\n<video src="film.mp4" width="400" controls poster="okladka.jpg"></video>',
              },
              {
                typ: "h",
                tekst: "Kilka źródeł — `<source>`",
              },
              {
                typ: "p",
                tekst:
                  "Różne przeglądarki obsługują różne formaty. Element `<source>` pozwala podać kilka plików — przeglądarka wybierze pierwszy, który umie odtworzyć. Tekst wewnątrz wyświetli się, gdy przeglądarka w ogóle nie obsługuje elementu.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<video width="480" controls muted loop>\n  <source src="film.mp4" type="video/mp4">\n  <source src="film.webm" type="video/webm">\n  Twoja przeglądarka nie obsługuje wideo.\n</video>',
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut", "Działanie"],
                wiersze: [
                  [
                    "`controls`",
                    "Wyświetla przyciski sterujące (odtwórz, pauza, głośność)",
                  ],
                  [
                    "`autoplay`",
                    "Automatyczne odtwarzanie po wczytaniu (zwykle działa tylko z `muted`)",
                  ],
                  ["`loop`", "Odtwarzanie w pętli"],
                  ["`muted`", "Wyciszenie"],
                  [
                    "`poster`",
                    "Obraz wyświetlany przed startem filmu (tylko `<video>`)",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Formaty",
              },
              {
                typ: "lista",
                elementy: [
                  "Audio: MP3, OGG, WAV.",
                  "Wideo: MP4 (H.264), WebM, OGG.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Który atrybut wyświetli panel sterowania odtwarzaczem?” — `controls`. Bez niego film lub dźwięk nie ma żadnych przycisków.",
              },
            ],
          },
          {
            id: "html-iframe",
            tytul: "Ramki iframe",
            skrot:
              "Element `<iframe>` osadza inną stronę (np. mapę lub film) wewnątrz bieżącej strony.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`<iframe>` (inline frame) to okienko, w którym wyświetla się **inny dokument HTML**. Często używa się go do osadzenia mapy Google, filmu z YouTube lub innej podstrony.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<iframe src="https://www.openstreetmap.org/export/embed.html" width="600" height="400" title="Mapa dojazdu"></iframe>',
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut", "Znaczenie"],
                wiersze: [
                  ["`src`", "Adres osadzanej strony"],
                  ["`width`, `height`", "Rozmiar ramki"],
                  ["`title`", "Opis ramki (dostępność)"],
                  [
                    "`name`",
                    "Nazwa ramki — można do niej kierować linki przez `target`",
                  ],
                  ["`allowfullscreen`", "Pozwala na pełny ekran (np. filmy)"],
                ],
              },
              {
                typ: "h",
                tekst: "Link otwierany w ramce",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<a href="cennik.html" target="okno">Cennik</a>\n<iframe name="okno" width="500" height="300"></iframe>',
              },
              {
                typ: "uwaga",
                tekst:
                  "Stare elementy `<frameset>` i `<frame>` (dzielenie całego okna na ramki) są w HTML5 **przestarzałe**. Został tylko `<iframe>`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "W teście może pojawić się pytanie, który element osadza inny dokument w bieżącej stronie — `<iframe>`. Pamiętaj, że link z `target` równym nazwie ramki otworzy się w tej ramce.",
              },
            ],
          },
        ],
      },
      {
        id: "html-tabele",
        tytul: "Tabele",
        tematy: [
          {
            id: "html-tabele-podstawy",
            tytul: "Budowa tabeli",
            skrot:
              "Tabela `<table>` składa się z wierszy `<tr>`, komórek `<td>`, komórek nagłówkowych `<th>` i opcjonalnego podpisu `<caption>`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Tabelę budujemy **wierszami**. Najpierw otwieramy wiersz `<tr>` (table row), a w nim umieszczamy komórki.",
              },
              {
                typ: "tabela",
                naglowki: ["Znacznik", "Znaczenie"],
                wiersze: [
                  ["`<table>`", "Cała tabela"],
                  ["`<caption>`", "Tytuł (podpis) tabeli — tuż po `<table>`"],
                  ["`<tr>`", "Wiersz (table row)"],
                  [
                    "`<th>`",
                    "Komórka nagłówkowa (table header) — domyślnie pogrubiona i wyśrodkowana",
                  ],
                  ["`<td>`", "Zwykła komórka z danymi (table data)"],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<table border="1">\n  <caption>Cennik</caption>\n  <tr>\n    <th>Usługa</th>\n    <th>Cena</th>\n  </tr>\n  <tr>\n    <td>Strzyżenie</td>\n    <td>40 zł</td>\n  </tr>\n  <tr>\n    <td>Farbowanie</td>\n    <td>120 zł</td>\n  </tr>\n</table>',
              },
              {
                typ: "wynik",
                html: '<table border="1" style="border-collapse:collapse;">\n  <caption>Cennik</caption>\n  <tr><th style="padding:4px 10px;">Usługa</th><th style="padding:4px 10px;">Cena</th></tr>\n  <tr><td style="padding:4px 10px;">Strzyżenie</td><td style="padding:4px 10px;">40 zł</td></tr>\n  <tr><td style="padding:4px 10px;">Farbowanie</td><td style="padding:4px 10px;">120 zł</td></tr>\n</table>',
              },
              {
                typ: "p",
                tekst:
                  'Atrybut `border="1"` dodaje obramowanie. W nowoczesnym kodzie obramowanie, odstępy i kolory ustawia się w CSS (`border`, `padding`, `border-collapse`).',
              },
              {
                typ: "egzamin",
                tekst:
                  "Tabele są bardzo częste w arkuszach — np. tabela z danymi wypełniana przez PHP z bazy. Pytanie testowe: „Który znacznik tworzy wiersz tabeli?” — `<tr>`. „Komórka nagłówkowa?” — `<th>`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Nie myl `<th>` (komórka nagłówkowa tabeli) z `<thead>` (sekcja nagłówka) ani z `<head>` (nagłówek dokumentu).",
              },
            ],
          },
          {
            id: "html-tabele-scalanie",
            tytul: "Scalanie komórek: colspan i rowspan",
            skrot:
              "`colspan` łączy komórki w poziomie (przez kolumny), `rowspan` w pionie (przez wiersze).",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Komórka może zajmować kilka kolumn lub kilka wierszy. Służą do tego atrybuty komórki `<td>` lub `<th>`:",
              },
              {
                typ: "lista",
                elementy: [
                  '`colspan="n"` — komórka rozciąga się na **n kolumn** (scalanie w poziomie).',
                  '`rowspan="n"` — komórka rozciąga się na **n wierszy** (scalanie w pionie).',
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<table border="1">\n  <tr>\n    <th colspan="3">Plan zajęć</th>\n  </tr>\n  <tr>\n    <td rowspan="2">Poniedziałek</td>\n    <td>8:00</td>\n    <td>Matematyka</td>\n  </tr>\n  <tr>\n    <td>9:00</td>\n    <td>Fizyka</td>\n  </tr>\n</table>',
              },
              {
                typ: "wynik",
                html: '<table border="1" style="border-collapse:collapse;">\n  <tr><th colspan="3" style="padding:4px 10px;">Plan zajęć</th></tr>\n  <tr><td rowspan="2" style="padding:4px 10px;">Poniedziałek</td><td style="padding:4px 10px;">8:00</td><td style="padding:4px 10px;">Matematyka</td></tr>\n  <tr><td style="padding:4px 10px;">9:00</td><td style="padding:4px 10px;">Fizyka</td></tr>\n</table>',
              },
              {
                typ: "p",
                tekst:
                  'Zauważ, że w trzecim wierszu są tylko **dwie** komórki. Trzecią miejsce zajmuje już komórka „Poniedziałek” z `rowspan="2"` z wiersza wyżej.',
              },
              {
                typ: "kroki",
                elementy: [
                  "Narysuj tabelę na kartce jako siatkę.",
                  "Zaznacz, które komórki są scalone.",
                  "Wpisz `colspan`/`rowspan` w pierwszej (lewej górnej) komórce scalenia.",
                  "W kolejnych wierszach pomiń komórki „zajęte” przez scalenie.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Klasyczne pytanie z obrazkiem tabeli: „Który kod utworzy tabelę jak na rysunku?” Policz kolumny w każdym wierszu. Pamiętaj: **col**span = **kol**umny (poziomo), **row**span = wiersze (pionowo).",
              },
            ],
          },
          {
            id: "html-tabele-sekcje",
            tytul: "Sekcje tabeli: thead, tbody, tfoot",
            skrot:
              "Duże tabele dzieli się na nagłówek `<thead>`, treść `<tbody>` i stopkę `<tfoot>`; kolumny można grupować przez `<colgroup>`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Sekcje porządkują tabelę i ułatwiają stylowanie. Przeglądarka zawsze wyświetla `<thead>` na górze i `<tfoot>` na dole.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<table>\n  <thead>\n    <tr><th>Produkt</th><th>Ilość</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Długopis</td><td>10</td></tr>\n    <tr><td>Zeszyt</td><td>5</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Razem</td><td>15</td></tr>\n  </tfoot>\n</table>",
              },
              {
                typ: "wynik",
                html: '<table style="border-collapse:collapse;">\n  <thead><tr style="background:#3a7bd5;color:#fff;"><th style="padding:4px 12px;">Produkt</th><th style="padding:4px 12px;">Ilość</th></tr></thead>\n  <tbody><tr><td style="padding:4px 12px;border-bottom:1px solid #ccc;">Długopis</td><td style="padding:4px 12px;border-bottom:1px solid #ccc;">10</td></tr>\n  <tr><td style="padding:4px 12px;border-bottom:1px solid #ccc;">Zeszyt</td><td style="padding:4px 12px;border-bottom:1px solid #ccc;">5</td></tr></tbody>\n  <tfoot><tr style="font-weight:bold;"><td style="padding:4px 12px;">Razem</td><td style="padding:4px 12px;">15</td></tr></tfoot>\n</table>',
              },
              {
                typ: "tabela",
                naglowki: ["Znacznik", "Znaczenie"],
                wiersze: [
                  ["`<thead>`", "Wiersze nagłówkowe"],
                  ["`<tbody>`", "Główne dane"],
                  ["`<tfoot>`", "Podsumowanie (stopka)"],
                  [
                    "`<colgroup>`, `<col>`",
                    'Grupowanie kolumn, np. `<col span="2" style="background:yellow">`',
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Na teście: „Który znacznik określa stopkę tabeli?” — `<tfoot>`. Nie myl z `<footer>` (stopka strony).",
              },
            ],
          },
        ],
      },
      {
        id: "html-formularze",
        tytul: "Formularze",
        tematy: [
          {
            id: "html-formularz",
            tytul: "Formularz: action i method",
            skrot:
              "Element `<form>` wysyła dane do skryptu z `action`; metoda GET dopisuje je do adresu URL, POST wysyła w treści żądania.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Formularz zbiera dane od użytkownika i wysyła je na serwer, np. do skryptu PHP. Wszystkie pola muszą być **wewnątrz** `<form>`.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<form action="zapisz.php" method="post">\n  <label for="imie">Imię:</label>\n  <input type="text" id="imie" name="imie">\n  <button type="submit">Wyślij</button>\n</form>',
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut `<form>`", "Znaczenie"],
                wiersze: [
                  [
                    "`action`",
                    "Adres skryptu, który odbierze dane (np. `zapisz.php`). Puste lub brak — ta sama strona.",
                  ],
                  ["`method`", "Sposób wysłania: `get` (domyślnie) lub `post`"],
                  [
                    '`enctype="multipart/form-data"`',
                    'Wymagane przy wysyłaniu plików (`type="file"`)',
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "GET czy POST?",
              },
              {
                typ: "tabela",
                naglowki: ["Cecha", "GET", "POST"],
                wiersze: [
                  [
                    "Gdzie są dane",
                    "W adresie URL: `szukaj.php?imie=Anna&wiek=17`",
                    "W treści żądania HTTP, niewidoczne w adresie",
                  ],
                  [
                    "Rozmiar",
                    "Ograniczony długością adresu",
                    "Praktycznie bez limitu, można wysyłać pliki",
                  ],
                  [
                    "Zakładki, historia",
                    "Można zapisać wynik w zakładce",
                    "Nie można",
                  ],
                  [
                    "Zastosowanie",
                    "Wyszukiwanie, filtrowanie",
                    "Logowanie, hasła, zapis do bazy",
                  ],
                  ["W PHP", "`$_GET['imie']`", "`$_POST['imie']`"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "**Atrybut `name`** jest kluczowy: to pod tą nazwą dane trafią do PHP. Pole bez `name` nie zostanie wysłane.",
              },
              {
                typ: "egzamin",
                tekst:
                  'Bardzo częste pytanie: „Dane formularza wysłane metodą GET są…” — widoczne w pasku adresu. W arkuszu: „formularz wysyła dane metodą POST do tego samego pliku” — `<form action="" method="post">` lub `action="nazwa.php"`.',
              },
              {
                typ: "uwaga",
                tekst:
                  "Metoda POST **nie szyfruje** danych — ukrywa je tylko przed paskiem adresu. Do ochrony służy HTTPS.",
              },
            ],
          },
          {
            id: "html-input",
            tytul: "Pola input i ich typy",
            skrot:
              "Element `<input>` z atrybutem `type`: text, password, email, number, date, color, range, file, hidden, submit, reset.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`<input>` to element pusty. Jego wygląd i działanie zależą od atrybutu `type`. Domyślny typ to `text`.",
              },
              {
                typ: "tabela",
                naglowki: ["`type`", "Co tworzy"],
                wiersze: [
                  ["`text`", "Jednoliniowe pole tekstowe"],
                  ["`password`", "Pole hasła — znaki zastąpione kropkami"],
                  [
                    "`email`",
                    "Pole e-mail, przeglądarka sprawdza format (`@`)",
                  ],
                  [
                    "`number`",
                    "Liczba, strzałki góra/dół; atrybuty `min`, `max`, `step`",
                  ],
                  ["`range`", "Suwak z zakresu `min`-`max`"],
                  ["`date`, `time`", "Wybór daty / godziny z kalendarza"],
                  ["`color`", "Wybór koloru"],
                  ["`tel`, `url`", "Numer telefonu, adres internetowy"],
                  ["`checkbox`", "Pole wyboru (wiele opcji)"],
                  ["`radio`", "Przycisk opcji (jedna z grupy)"],
                  ["`file`", "Wybór pliku z dysku"],
                  ["`hidden`", "Ukryte pole — niewidoczne, ale wysyłane"],
                  ["`submit`", "Przycisk wysyłający formularz"],
                  ["`reset`", "Przycisk czyszczący formularz"],
                  ["`button`", "Zwykły przycisk (zwykle dla JavaScript)"],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<form action="rejestracja.php" method="post">\n  Login: <input type="text" name="login"><br>\n  Hasło: <input type="password" name="haslo"><br>\n  E-mail: <input type="email" name="email"><br>\n  Wiek: <input type="number" name="wiek" min="1" max="120"><br>\n  <input type="submit" value="Zarejestruj">\n  <input type="reset" value="Wyczyść">\n</form>',
              },
              {
                typ: "wynik",
                html: '<div>\n  Login: <input type="text"><br>\n  Hasło: <input type="password" value="tajne"><br>\n  Wiek: <input type="number" min="1" max="120" value="17"><br>\n  <input type="button" value="Zarejestruj"> <input type="button" value="Wyczyść">\n</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  'Pytania typu: „Które pole ukryje wpisywane znaki?” — `type="password"`. „Przycisk czyszczący formularz?” — `type="reset"`. Tekst na przycisku `<input type="submit">` ustawia atrybut `value`.',
              },
            ],
          },
          {
            id: "html-wybor",
            tytul: "Radio, checkbox, select, textarea i label",
            skrot:
              "Pola wyboru, przyciski opcji, lista rozwijana, pole wielowierszowe i etykiety powiązane z polami.",
            tresc: [
              {
                typ: "h",
                tekst: "Radio i checkbox",
              },
              {
                typ: "p",
                tekst:
                  "Przyciski `radio` z **tą samą wartością `name`** tworzą grupę — można zaznaczyć tylko jeden. `checkbox` pozwala zaznaczyć dowolnie wiele. Atrybut `checked` zaznacza opcję domyślnie, a `value` to wartość wysyłana na serwer.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<p>Płeć:</p>\n<input type="radio" name="plec" value="k" id="k" checked> <label for="k">Kobieta</label>\n<input type="radio" name="plec" value="m" id="m"> <label for="m">Mężczyzna</label>\n<p>Zainteresowania:</p>\n<input type="checkbox" name="sport" id="sport"> <label for="sport">Sport</label>\n<input type="checkbox" name="muzyka" id="muzyka" checked> <label for="muzyka">Muzyka</label>',
              },
              {
                typ: "wynik",
                html: '<div>Płeć: <input type="radio" name="plec-demo" checked> Kobieta <input type="radio" name="plec-demo"> Mężczyzna</div>\n<div>Zainteresowania: <input type="checkbox"> Sport <input type="checkbox" checked> Muzyka</div>',
              },
              {
                typ: "h",
                tekst: "Lista rozwijana `<select>`",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<label for="miasto">Miasto:</label>\n<select name="miasto" id="miasto">\n  <option value="waw">Warszawa</option>\n  <option value="krk" selected>Kraków</option>\n  <option value="gda">Gdańsk</option>\n</select>',
              },
              {
                typ: "p",
                tekst:
                  "Atrybut `selected` wybiera opcję domyślną. `multiple` pozwala zaznaczyć kilka opcji, a `size` ustala liczbę widocznych wierszy.",
              },
              {
                typ: "h",
                tekst: "Pole wielowierszowe `<textarea>`",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<textarea name="opinia" rows="4" cols="40">Tekst domyślny</textarea>',
              },
              {
                typ: "p",
                tekst:
                  "`rows` — liczba wierszy, `cols` — szerokość w znakach. Tekst domyślny wpisujemy **między** znacznikami (nie w `value`).",
              },
              {
                typ: "h",
                tekst: "Etykieta `<label>`",
              },
              {
                typ: "p",
                tekst:
                  '`<label for="x">` łączy etykietę z polem o `id="x"`. Kliknięcie w tekst etykiety zaznacza pole. Można też umieścić pole wewnątrz etykiety: `<label><input type="checkbox"> Regulamin</label>`.',
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe pytania: „Aby można było wybrać tylko jedną opcję, przyciski radio muszą mieć…” — ten sam atrybut `name`. „Który element tworzy listę rozwijaną?” — `<select>` z `<option>`. „Atrybut `for` etykiety odpowiada atrybutowi…” — `id` pola.",
              },
              {
                typ: "uwaga",
                tekst:
                  '`<textarea>` ma znacznik zamykający, `<input>` nie ma. Częsty błąd: `<textarea value="…">` — to nie zadziała.',
              },
            ],
          },
          {
            id: "html-przyciski",
            tytul: "Przyciski i atrybuty pól",
            skrot:
              "Element `<button>` oraz atrybuty `required`, `placeholder`, `value`, `maxlength`, `min`, `max`, `readonly`, `disabled`, `autofocus`.",
            tresc: [
              {
                typ: "h",
                tekst: "Przyciski",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<button type="submit">Wyślij</button>\n<button type="reset">Wyczyść</button>\n<button type="button" onclick="policz()">Oblicz</button>',
              },
              {
                typ: "p",
                tekst:
                  '`<button>` może zawierać tekst i obrazki. Jego domyślny typ w formularzu to `submit`. Przycisk wywołujący funkcję JavaScript powinien mieć `type="button"`, żeby nie wysyłał formularza.',
              },
              {
                typ: "h",
                tekst: "Atrybuty pól formularza",
              },
              {
                typ: "tabela",
                naglowki: ["Atrybut", "Działanie"],
                wiersze: [
                  ["`name`", "Nazwa, pod którą dane trafią na serwer"],
                  ["`value`", "Wartość początkowa pola / tekst przycisku"],
                  [
                    "`placeholder`",
                    "Szary tekst podpowiedzi znikający po wpisaniu",
                  ],
                  [
                    "`required`",
                    "Pole wymagane — formularz nie wyśle się, gdy jest puste",
                  ],
                  ["`maxlength`", "Maksymalna liczba znaków"],
                  ["`min`, `max`, `step`", "Zakres i krok dla liczb i dat"],
                  ["`readonly`", "Tylko do odczytu, ale wartość jest wysyłana"],
                  [
                    "`disabled`",
                    "Wyłączone — szare, wartość **nie** jest wysyłana",
                  ],
                  [
                    "`autofocus`",
                    "Kursor ustawia się w polu po wczytaniu strony",
                  ],
                  [
                    "`pattern`",
                    "Wyrażenie regularne, które musi pasować do wpisanej wartości",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<input type="text" name="nazwisko" placeholder="Wpisz nazwisko" required maxlength="50">\n<input type="number" name="ilosc" value="1" min="1" max="10">\n<input type="text" name="kod" value="ABC123" readonly>',
              },
              {
                typ: "wynik",
                html: '<input type="text" placeholder="Wpisz nazwisko"> <input type="number" value="1" min="1" max="10" style="width:60px;"> <input type="text" value="ABC123" readonly> <input type="text" value="wyłączone" disabled>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Który atrybut wyświetla w pustym polu tekst podpowiedzi?” — `placeholder` (nie `value`!). „Który atrybut sprawia, że pole musi być wypełnione?” — `required`.",
              },
            ],
          },
        ],
      },
      {
        id: "html-uklad",
        tytul: "Układ strony i dołączanie zasobów",
        tematy: [
          {
            id: "html-semantyka",
            tytul: "Znaczniki semantyczne HTML5",
            skrot:
              "`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — bloki układu, które opisują swoją rolę.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Znaczniki semantyczne działają jak `<div>` (są blokowe), ale ich nazwa **mówi, czym jest dana część** strony. Pomaga to wyszukiwarkom, czytnikom ekranu i programistom.",
              },
              {
                typ: "tabela",
                naglowki: ["Znacznik", "Rola"],
                wiersze: [
                  [
                    "`<header>`",
                    "Nagłówek strony lub sekcji (logo, baner, tytuł)",
                  ],
                  ["`<nav>`", "Menu nawigacyjne — główne odnośniki"],
                  ["`<main>`", "Główna treść strony (jeden na stronę)"],
                  [
                    "`<section>`",
                    "Tematyczna sekcja treści, zwykle z nagłówkiem",
                  ],
                  [
                    "`<article>`",
                    "Samodzielna treść: wpis na blogu, artykuł, news",
                  ],
                  ["`<aside>`", "Treść poboczna: panel boczny, reklamy, linki"],
                  [
                    "`<footer>`",
                    "Stopka strony lub sekcji (autor, kontakt, prawa autorskie)",
                  ],
                  ["`<figure>`, `<figcaption>`", "Ilustracja z podpisem"],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<header>\n  <h1>Biblioteka miejska</h1>\n</header>\n<nav>\n  <a href="index.html">Start</a>\n  <a href="katalog.html">Katalog</a>\n</nav>\n<main>\n  <article>\n    <h2>Nowości</h2>\n    <p>W tym miesiącu…</p>\n  </article>\n  <aside>Godziny otwarcia: 8-16</aside>\n</main>\n<footer>\n  <p>Stronę wykonał: 00000000000</p>\n</footer>',
              },
              {
                typ: "wynik",
                html: '<div style="font-family:sans-serif;font-size:13px;text-align:center;">\n  <div style="background:#3a7bd5;color:#fff;padding:6px;">header</div>\n  <div style="background:#90caf9;padding:4px;">nav</div>\n  <div style="display:flex;">\n    <div style="background:#e3f2fd;flex:3;padding:16px;">main / article</div>\n    <div style="background:#bbdefb;flex:1;padding:16px;">aside</div>\n  </div>\n  <div style="background:#1e3a5f;color:#fff;padding:6px;">footer</div>\n</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  'W arkuszach praktycznych bloki nazywa się „baner”, „panel lewy”, „panel prawy”, „blok główny”, „stopka”. Często wolno użyć zarówno `<div id="…">`, jak i znaczników semantycznych — ważne, żeby kolejność i identyfikatory były zgodne z poleceniem. W teście: „Który znacznik przeznaczony jest na menu nawigacyjne?” — `<nav>`.',
              },
            ],
          },
          {
            id: "html-css-js",
            tytul: "Dołączanie CSS i JavaScript",
            skrot:
              'Arkusz CSS dołączamy przez `<link rel="stylesheet">` lub `<style>`, a skrypty przez `<script src>` lub kod wewnątrz `<script>`.',
            tresc: [
              {
                typ: "h",
                tekst: "CSS",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<head>\n  <link rel="stylesheet" href="styl.css">\n  <style>\n    h1 { color: navy; }\n  </style>\n</head>\n<body>\n  <p style="color: red;">Styl lokalny</p>\n</body>',
              },
              {
                typ: "lista",
                elementy: [
                  '`<link rel="stylesheet" href="styl.css">` — zewnętrzny arkusz stylów, zawsze w `<head>`. Element pusty.',
                  "`<style>…</style>` — styl wewnętrzny (osadzony) w `<head>`.",
                  'Atrybut `style="…"` — styl lokalny (inline) w konkretnym elemencie.',
                ],
              },
              {
                typ: "h",
                tekst: "JavaScript",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<head>\n  <script src="skrypt.js" defer></script>\n</head>\n<body>\n  <button onclick="pokaz()">Pokaż</button>\n  <script>\n    function pokaz() {\n      alert("Witaj!");\n    }\n  </script>\n</body>',
              },
              {
                typ: "lista",
                elementy: [
                  '`<script src="plik.js"></script>` — skrypt zewnętrzny. Znacznik zamykający jest **wymagany**, nawet gdy w środku nic nie ma.',
                  "Skrypt wewnętrzny piszemy między `<script>` a `</script>`.",
                  "Skrypt najlepiej umieścić na końcu `<body>` albo w `<head>` z atrybutem `defer` — wtedy elementy strony już istnieją, gdy skrypt startuje.",
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Co dołączamy", "Znacznik", "Atrybut ze ścieżką"],
                wiersze: [
                  ["Arkusz CSS", '`<link rel="stylesheet">`', "`href`"],
                  ["Skrypt JS", "`<script>`", "`src`"],
                  ["Obraz", "`<img>`", "`src`"],
                  ["Ikona strony (favicon)", '`<link rel="icon">`', "`href`"],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  'Pytanie: „Który zapis poprawnie dołącza zewnętrzny arkusz CSS?” — `<link rel="stylesheet" href="styl.css">`. Pułapki: `<style src=…>`, `<css href=…>`, `<link src=…>`. W arkuszu praktycznym zawsze trzeba podpiąć plik np. `styl1.css` — bez tego nie dostaniesz punktów za wygląd.',
              },
              {
                typ: "uwaga",
                tekst:
                  "Nazwa pliku w `href` musi dokładnie zgadzać się z nazwą na dysku, łącznie z wielkością liter i cyfrą (np. `styl4.css`).",
              },
            ],
          },
          {
            id: "html-szablon",
            tytul: "Szablon strony z egzaminu",
            skrot:
              "Kompletny szkielet typowej strony z arkusza praktycznego: baner, panele, blok główny i stopka, z podpiętym CSS.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Prawie każdy arkusz praktyczny INF.03 ma podobny układ: **baner** na górze, pod nim dwa lub trzy **panele** (lewy, prawy, czasem środkowy/główny) i **stopka**. W panelach są listy, tabele, obrazy, formularze i wyniki skryptów PHP lub JS.",
              },
              {
                typ: "kroki",
                elementy: [
                  "Przeczytaj cały arkusz i narysuj układ bloków na kartce.",
                  'Napisz szkielet HTML: doctype, `lang="pl"`, `charset`, tytuł z polecenia, `<link>` do CSS.',
                  "Utwórz bloki z identyfikatorami **dokładnie** takimi jak w poleceniu (np. `baner`, `lewy`, `prawy`, `stopka`).",
                  "Wypełnij bloki treścią: nagłówki odpowiedniego stopnia, listy, obrazy z `alt`, odnośniki.",
                  "Dopisz CSS i sprawdź wygląd w przeglądarce, potem dodaj skrypty.",
                  "Zrób zrzuty ekranu i zapisz pliki w folderze zgodnym z poleceniem.",
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Wędkujemy</title>\n  <link rel="stylesheet" href="styl_1.css">\n</head>\n<body>\n  <header id="baner">\n    <h1>Portal dla wędkarzy</h1>\n  </header>\n  <section id="lewy">\n    <h3>Ryby drapieżne naszych wód</h3>\n    <ol>\n      <li>Szczupak</li>\n      <li>Okoń</li>\n      <li>Sum</li>\n    </ol>\n  </section>\n  <section id="prawy">\n    <img src="ryba1.jpg" alt="Sum">\n    <br>\n    <a href="kwerendy.txt">Pobierz kwerendy</a>\n  </section>\n  <section id="glowny">\n    <h3>Łowiska</h3>\n    <table>\n      <tr>\n        <th>Łowisko</th>\n        <th>Termin</th>\n      </tr>\n      <tr>\n        <td>Jezioro Białe</td>\n        <td>2025-06-01</td>\n      </tr>\n    </table>\n  </section>\n  <footer id="stopka">\n    <p>Stronę wykonał: 00000000000</p>\n  </footer>\n</body>\n</html>',
                tytul: "index.html",
              },
              {
                typ: "p",
                tekst:
                  'Ten sam układ można zbudować z `<div id="baner">`, `<div id="lewy">` itd. Na egzaminie liczy się zgodność z poleceniem: liczba bloków, ich kolejność i nazwy.',
              },
              {
                typ: "wynik",
                html: '<div style="font-family:sans-serif;font-size:13px;text-align:center;">\n  <div style="background:#1565c0;color:#fff;padding:10px;">baner</div>\n  <div style="overflow:hidden;">\n    <div style="float:left;width:30%;height:70px;background:#90caf9;padding-top:25px;box-sizing:border-box;">lewy</div>\n    <div style="float:left;width:40%;height:70px;background:#e3f2fd;padding-top:25px;box-sizing:border-box;">glowny</div>\n    <div style="float:left;width:30%;height:70px;background:#64b5f6;padding-top:25px;box-sizing:border-box;">prawy</div>\n  </div>\n  <div style="background:#0d47a1;color:#fff;padding:6px;">stopka</div>\n</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Na egzaminie oceniane są m.in.: poprawny tytuł strony, podpięty arkusz stylów, bloki w odpowiedniej kolejności, nagłówki właściwego stopnia, `alt` w obrazach, odnośnik do wskazanego pliku i stopka z podanym tekstem. Za każde z tych drobiazgów jest osobny punkt.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Kolejność bloków w kodzie wpływa na układ przy `float`. Jeśli polecenie mówi „panel lewy, panel prawy”, napisz je w HTML w tej kolejności. Stopka musi mieć w CSS `clear: both`, jeśli panele są pływające.",
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        pytanie:
          "Który znacznik określa tytuł strony wyświetlany na karcie przeglądarki?",
        odpowiedzi: [
          "`<h1>`",
          '`<meta name="title">`',
          "`<header>`",
          "`<title>`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`<title>` umieszcza się w `<head>`. Jego treść widać na karcie przeglądarki i w wynikach wyszukiwania.",
      },
      {
        pytanie:
          "Który zapis w sekcji `<head>` ustawia kodowanie znaków UTF-8?",
        odpowiedzi: [
          '`<meta charset="UTF-8">`',
          '`<html charset="UTF-8">`',
          '`<meta lang="UTF-8">`',
          '`<meta encoding="UTF-8">`',
        ],
        poprawna: 0,
        wyjasnienie:
          "Kodowanie ustawia element `<meta>` z atrybutem `charset`. Dzięki temu polskie znaki wyświetlają się poprawnie.",
      },
      {
        pytanie: 'Atrybut `lang="pl"` w znaczniku `<html>` informuje o:',
        odpowiedzi: [
          "kraju serwera",
          "kodowaniu znaków",
          "języku treści dokumentu",
          "wersji HTML",
        ],
        poprawna: 2,
        wyjasnienie:
          "`lang` określa język treści, co pomaga wyszukiwarkom i czytnikom ekranu.",
      },
      {
        pytanie:
          "Który atrybut znacznika `<img>` określa tekst wyświetlany, gdy obraz nie może zostać wczytany?",
        odpowiedzi: ["`title`", "`alt`", "`name`", "`src`"],
        poprawna: 1,
        wyjasnienie:
          "`alt` to tekst alternatywny. `title` tylko wyświetla dymek po najechaniu myszą.",
      },
      {
        pytanie:
          "Który format graficzny obsługuje animację, ale ma paletę ograniczoną do 256 kolorów?",
        odpowiedzi: ["JPG", "PNG", "GIF", "BMP"],
        poprawna: 2,
        wyjasnienie:
          "GIF ma paletę maksymalnie 256 kolorów i pozwala zapisać animację.",
      },
      {
        pytanie:
          "Który format grafiki jest wektorowy i nie traci jakości przy powiększaniu?",
        odpowiedzi: ["PNG", "SVG", "JPG", "GIF"],
        poprawna: 1,
        wyjasnienie:
          "SVG opisuje grafikę kształtami (w XML), dlatego skaluje się bez utraty jakości. Pozostałe są rastrowe.",
      },
      {
        pytanie:
          "Aby wyświetlić tekst „m²” z dwójką jako indeksem górnym, należy użyć znacznika:",
        odpowiedzi: ["`<small>`", "`<up>`", "`<sub>`", "`<sup>`"],
        poprawna: 3,
        wyjasnienie:
          "`<sup>` to indeks górny (superscript). `<sub>` to indeks dolny, np. H₂O.",
      },
      {
        pytanie: "Którym znacznikiem tworzy się listę numerowaną?",
        odpowiedzi: ["`<ol>`", "`<ul>`", "`<dl>`", "`<li>`"],
        poprawna: 0,
        wyjasnienie:
          "`<ol>` (ordered list) to lista numerowana, `<ul>` — punktowana, `<dl>` — lista definicji.",
      },
      {
        pytanie: 'Jaką numerację wyświetli lista `<ol type="I">`?',
        odpowiedzi: [
          "wielkie litery: A, B, C",
          "rzymską wielkimi literami: I, II, III",
          "małe litery: i, ii, iii",
          "arabską: 1, 2, 3",
        ],
        poprawna: 1,
        wyjasnienie:
          '`type="I"` to cyfry rzymskie wielkie. `i` — rzymskie małe, `A` — litery, `1` — cyfry arabskie.',
      },
      {
        pytanie: "Który odnośnik otworzy stronę w nowej karcie przeglądarki?",
        odpowiedzi: [
          '`<a href="strona.html" target="_blank">`',
          '`<a src="strona.html" target="_new">`',
          '`<a href="strona.html" target="_self">`',
          '`<a href="strona.html" new>`',
        ],
        poprawna: 0,
        wyjasnienie:
          '`target="_blank"` otwiera nową kartę. `_self` to ta sama karta, a `src` nie jest atrybutem `<a>`.',
      },
      {
        pytanie:
          "Odnośnik, który po kliknięciu otworzy program pocztowy z adresem `biuro@szkola.pl`, to:",
        odpowiedzi: [
          '`<a href="email:biuro@szkola.pl">`',
          '`<a href="http://biuro@szkola.pl">`',
          '`<a mail="biuro@szkola.pl">`',
          '`<a href="mailto:biuro@szkola.pl">`',
        ],
        poprawna: 3,
        wyjasnienie:
          "Schemat `mailto:` w `href` otwiera domyślny program pocztowy.",
      },
      {
        pytanie:
          'Na stronie jest element `<h2 id="kontakt">`. Który odnośnik przeniesie do niego?',
        odpowiedzi: [
          '`<a href="kontakt">`',
          '`<a href=".kontakt">`',
          '`<a href="#kontakt">`',
          '`<a name="kontakt">`',
        ],
        poprawna: 2,
        wyjasnienie: "Kotwica to `#` i wartość `id` elementu docelowego.",
      },
      {
        pytanie:
          "Który atrybut komórki tabeli łączy ją z sąsiednimi komórkami w poziomie?",
        odpowiedzi: ["`merge`", "`colspan`", "`cellspacing`", "`rowspan`"],
        poprawna: 1,
        wyjasnienie:
          "`colspan` rozciąga komórkę na kilka kolumn (poziomo), `rowspan` — na kilka wierszy (pionowo).",
      },
      {
        pytanie: 'Komórka `<td rowspan="3">` zajmuje:',
        odpowiedzi: [
          "trzy komórki w poziomie i pionie",
          "szerokość 3 pikseli",
          "trzy kolumny w poziomie",
          "trzy wiersze w pionie",
        ],
        poprawna: 3,
        wyjasnienie: "`rowspan` scala komórki w pionie, przez wiersze.",
      },
      {
        pytanie: "Który znacznik definiuje komórkę nagłówkową tabeli?",
        odpowiedzi: ["`<th>`", "`<head>`", "`<td>`", "`<thead>`"],
        poprawna: 0,
        wyjasnienie:
          "`<th>` to komórka nagłówkowa (domyślnie pogrubiona i wyśrodkowana). `<thead>` to cała sekcja nagłówka.",
      },
      {
        pytanie: "Który znacznik dodaje podpis (tytuł) tabeli?",
        odpowiedzi: ["`<th>`", "`<legend>`", "`<caption>`", "`<title>`"],
        poprawna: 2,
        wyjasnienie:
          "`<caption>` umieszcza się zaraz po `<table>`. `<legend>` to podpis grupy pól `<fieldset>`.",
      },
      {
        pytanie: "Dane formularza wysłane metodą GET:",
        odpowiedzi: [
          "są zawsze szyfrowane",
          "są dopisywane do adresu URL i widoczne w pasku adresu",
          "są wysyłane w treści żądania i niewidoczne w adresie",
          "nie mogą trafić do skryptu PHP",
        ],
        poprawna: 1,
        wyjasnienie:
          "GET dopisuje pary `nazwa=wartość` do adresu po znaku `?`. W PHP odczytuje się je z `$_GET`.",
      },
      {
        pytanie: "Który atrybut `<form>` wskazuje skrypt, który odbierze dane?",
        odpowiedzi: ["`method`", "`target`", "`href`", "`action`"],
        poprawna: 3,
        wyjasnienie:
          "`action` to adres skryptu, a `method` określa sposób wysłania (GET lub POST).",
      },
      {
        pytanie: "Które pole formularza zastąpi wpisywane znaki kropkami?",
        odpowiedzi: [
          '`<input type="password">`',
          '`<input type="hidden">`',
          '`<input type="secret">`',
          '`<input type="text" hidden>`',
        ],
        poprawna: 0,
        wyjasnienie:
          "Typ `password` ukrywa wpisywane znaki. `hidden` to pole całkowicie niewidoczne.",
      },
      {
        pytanie:
          "Aby z grupy przycisków `radio` można było zaznaczyć tylko jeden, muszą mieć one:",
        odpowiedzi: [
          "różne wartości atrybutu `name`",
          "taką samą wartość atrybutu `id`",
          "taką samą wartość atrybutu `name`",
          "atrybut `multiple`",
        ],
        poprawna: 2,
        wyjasnienie:
          "Przyciski radio tworzą grupę po wspólnym `name`. `id` musi być zawsze unikalne.",
      },
      {
        pytanie: "Którym elementem tworzy się listę rozwijaną w formularzu?",
        odpowiedzi: [
          "`<dropdown>`",
          '`<input type="list">`',
          "`<ul>` z elementami `<li>`",
          "`<select>` z elementami `<option>`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Lista rozwijana to `<select>`, a każda pozycja to `<option>`.",
      },
      {
        pytanie:
          "Który atrybut wyświetla w pustym polu szary tekst podpowiedzi?",
        odpowiedzi: ["`value`", "`placeholder`", "`title`", "`alt`"],
        poprawna: 1,
        wyjasnienie:
          "`placeholder` znika, gdy użytkownik zacznie pisać. `value` wpisuje prawdziwą wartość pola.",
      },
      {
        pytanie:
          "Który atrybut sprawia, że formularza nie da się wysłać z pustym polem?",
        odpowiedzi: ["`disabled`", "`readonly`", "`required`", "`checked`"],
        poprawna: 2,
        wyjasnienie:
          "`required` oznacza pole wymagane. `readonly` blokuje edycję, `disabled` wyłącza pole.",
      },
      {
        pytanie:
          "Atrybut `for` w znaczniku `<label>` powinien mieć wartość równą:",
        odpowiedzi: [
          "atrybutowi `id` powiązanego pola",
          "atrybutowi `action`",
          "atrybutowi `name` formularza",
          "treści etykiety",
        ],
        poprawna: 0,
        wyjasnienie:
          '`<label for="x">` łączy się z polem `id="x"`. Kliknięcie etykiety aktywuje pole.',
      },
      {
        pytanie: "Co wyświetli przeglądarka dla kodu `&lt;br&gt;`?",
        odpowiedzi: [
          "tekst `<br>`",
          "nic",
          "pustą linię i znak &",
          "złamanie linii",
        ],
        poprawna: 0,
        wyjasnienie:
          "`&lt;` i `&gt;` to encje znaków < i >, więc wyświetli się tekst, a nie nowa linia.",
      },
      {
        pytanie: "Która encja oznacza twardą spację (nierozdzielającą)?",
        odpowiedzi: ["`&sp;`", "`&space;`", "`&amp;`", "`&nbsp;`"],
        poprawna: 3,
        wyjasnienie:
          "`&nbsp;` (non-breaking space) nie łamie linii i nie jest scalana z innymi spacjami.",
      },
      {
        pytanie:
          "Który znacznik semantyczny HTML5 przeznaczony jest na menu nawigacyjne?",
        odpowiedzi: ["`<header>`", "`<nav>`", "`<aside>`", "`<menu>`"],
        poprawna: 1,
        wyjasnienie: "`<nav>` grupuje główne odnośniki nawigacyjne strony.",
      },
      {
        pytanie:
          "Który z elementów jest domyślnie elementem liniowym (inline)?",
        odpowiedzi: ["`<li>`", "`<p>`", "`<span>`", "`<div>`"],
        poprawna: 2,
        wyjasnienie:
          "`<span>` nie łamie linii. `<div>`, `<p>` i `<li>` są blokowe.",
      },
      {
        pytanie: "Który zapis poprawnie dołącza zewnętrzny arkusz stylów?",
        odpowiedzi: [
          '`<style src="styl.css">`',
          '`<link rel="stylesheet" href="styl.css">`',
          '`<css href="styl.css">`',
          '`<link src="styl.css" type="css">`',
        ],
        poprawna: 1,
        wyjasnienie:
          'Zewnętrzny CSS dołącza `<link>` z `rel="stylesheet"` i ścieżką w `href`.',
      },
      {
        pytanie: "Którym zapisem dołączymy plik `skrypt.js`?",
        odpowiedzi: [
          '`<link rel="script" href="skrypt.js">`',
          '`<js src="skrypt.js"></js>`',
          '`<script src="skrypt.js"></script>`',
          '`<script href="skrypt.js">`',
        ],
        poprawna: 2,
        wyjasnienie:
          "Skrypt zewnętrzny wskazuje atrybut `src` w `<script>`. Znacznik zamykający jest obowiązkowy.",
      },
      {
        pytanie:
          "Narzędziem do sprawdzania zgodności kodu HTML ze standardem jest:",
        odpowiedzi: [
          "walidator W3C",
          "kompilator HTML",
          "debugger JavaScript",
          "klient FTP",
        ],
        poprawna: 0,
        wyjasnienie:
          "Walidator W3C (validator.w3.org) wykrywa błędy składni, np. niezamknięte znaczniki czy brak `alt`.",
      },
      {
        pytanie:
          "Który atrybut elementu `<video>` wyświetla przyciski odtwarzania, pauzy i głośności?",
        odpowiedzi: ["`autoplay`", "`player`", "`buttons`", "`controls`"],
        poprawna: 3,
        wyjasnienie:
          "Bez `controls` odtwarzacz nie ma przycisków. `autoplay` uruchamia film automatycznie.",
      },
      {
        pytanie: "Który zapis jest komentarzem w HTML?",
        odpowiedzi: [
          "`# komentarz`",
          "`// komentarz`",
          "`<!-- komentarz -->`",
          "`/* komentarz */`",
        ],
        poprawna: 2,
        wyjasnienie:
          "Komentarz HTML zaczyna się od `<!--` i kończy `-->`. `/* */` to komentarz CSS.",
      },
      {
        pytanie: "Element `<hr>` służy do:",
        odpowiedzi: [
          "wstawienia nagłówka",
          "wstawienia poziomej linii oddzielającej treść",
          "utworzenia odnośnika",
          "złamania linii tekstu",
        ],
        poprawna: 1,
        wyjasnienie:
          "`<hr>` (horizontal rule) to pozioma linia. Złamanie linii to `<br>`.",
      },
      {
        pytanie:
          "Który znacznik osadza na stronie inny dokument HTML, np. mapę?",
        odpowiedzi: [
          "`<embed-page>`",
          "`<include>`",
          "`<frame>`",
          "`<iframe>`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`<iframe>` to ramka osadzona w treści. `<frame>` jest przestarzały w HTML5.",
      },
    ],
  },
  {
    id: "css",
    nazwa: "CSS",
    opis: "Kaskadowe arkusze stylów: selektory, kolory, czcionki, model pudełkowy, tła oraz układ strony z float i flexbox — dokładnie tak, jak wymaga egzamin INF.03.",
    dzialy: [
      {
        id: "css-podstawy",
        tytul: "Podstawy CSS",
        tematy: [
          {
            id: "css-sposoby",
            tytul: "Sposoby dołączania CSS",
            skrot:
              "Styl lokalny (atrybut `style`), wewnętrzny (`<style>` w `<head>`) i zewnętrzny (plik `.css` przez `<link>`).",
            tresc: [
              {
                typ: "p",
                tekst:
                  "CSS (Cascading Style Sheets, kaskadowe arkusze stylów) opisuje **wygląd** strony: kolory, czcionki, odstępy, układ. HTML mówi „co”, CSS mówi „jak to wygląda”.",
              },
              {
                typ: "p",
                tekst: "Styl można dodać na trzy sposoby:",
              },
              {
                typ: "h",
                tekst: "1. Styl lokalny (inline)",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<p style="color: red; font-size: 20px;">Czerwony akapit</p>',
              },
              {
                typ: "h",
                tekst: "2. Styl wewnętrzny (osadzony)",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: "<head>\n  <style>\n    p { color: blue; }\n  </style>\n</head>",
              },
              {
                typ: "h",
                tekst: "3. Styl zewnętrzny (plik .css)",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<head>\n  <link rel="stylesheet" href="styl.css">\n</head>',
                tytul: "index.html",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "body {\n  font-family: Arial, sans-serif;\n  background-color: #F0F0F0;\n}",
                tytul: "styl.css",
              },
              {
                typ: "tabela",
                naglowki: ["Sposób", "Gdzie", "Zasięg", "Priorytet"],
                wiersze: [
                  [
                    "Lokalny (inline)",
                    "Atrybut `style` w elemencie",
                    "Jeden element",
                    "Najwyższy",
                  ],
                  [
                    "Wewnętrzny",
                    "`<style>` w `<head>`",
                    "Jedna strona",
                    "Średni*",
                  ],
                  [
                    "Zewnętrzny",
                    "Plik `.css` + `<link>`",
                    "Wiele stron naraz",
                    "Średni*",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "* Styl wewnętrzny i zewnętrzny mają taką samą „siłę”. Wygrywa ten, który jest zapisany **później** w kodzie. Zwykle `<link>` stoi przed `<style>`, więc w typowym pytaniu kolejność ważności to: lokalny, wewnętrzny, zewnętrzny.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie testowe: „Uszereguj style od najwyższego priorytetu” — lokalny (inline), wewnętrzny, zewnętrzny. Na egzaminie praktycznym zawsze używasz **zewnętrznego** pliku o nazwie podanej w poleceniu (np. `styl2.css`).",
              },
              {
                typ: "uwaga",
                tekst:
                  "W pliku `.css` nie piszemy znaczników `<style>` — tylko same reguły CSS.",
              },
            ],
          },
          {
            id: "css-skladnia",
            tytul: "Składnia reguły CSS",
            skrot:
              "Reguła to selektor i blok deklaracji `właściwość: wartość;` w nawiasach klamrowych; komentarze i właściwości skrócone.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Każda reguła CSS składa się z **selektora** (co stylujemy) i **bloku deklaracji** w nawiasach klamrowych. Deklaracja to para `właściwość: wartość`, zakończona średnikiem.",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "h1 {\n  color: navy;\n  font-size: 32px;\n  text-align: center;\n}",
              },
              {
                typ: "tabela",
                naglowki: ["Część", "W przykładzie"],
                wiersze: [
                  ["Selektor", "`h1`"],
                  ["Właściwość", "`color`, `font-size`, `text-align`"],
                  ["Wartość", "`navy`, `32px`, `center`"],
                  ["Deklaracja", "`color: navy;`"],
                ],
              },
              {
                typ: "h",
                tekst: "Zasady zapisu",
              },
              {
                typ: "lista",
                elementy: [
                  "Właściwość od wartości oddziela **dwukropek** `:`, a deklaracje — **średnik** `;`.",
                  "Między liczbą a jednostką nie ma spacji: `20px`, nie `20 px`.",
                  "Przy wartości `0` jednostka jest zbędna: `margin: 0;`.",
                  "Kilka wartości oddzielamy spacją, np. `border: 1px solid black;`, a alternatywne czcionki przecinkiem.",
                  "Komentarz w CSS zapisujemy jako `/* tekst */`. Nie ma komentarzy jednoliniowych `//`.",
                ],
              },
              {
                typ: "h",
                tekst: "Właściwości skrócone (shorthand)",
              },
              {
                typ: "p",
                tekst:
                  "Wiele właściwości ma wersję skróconą, która ustawia kilka wartości naraz:",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: 'div {\n  border: 2px dashed green;\n  margin: 10px 20px;\n  font: italic bold 16px Arial;\n  background: #FFF url("tlo.png") no-repeat;\n}',
              },
              {
                typ: "egzamin",
                tekst:
                  "Na teście bywają pytania z błędnym zapisem, np. `color = red`, `color: red,` albo brak klamer. Poprawnie: `selektor { właściwość: wartość; }`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Literówka w nazwie właściwości lub brak średnika powoduje, że przeglądarka **cicho pomija** deklarację. Nie ma komunikatu o błędzie — sprawdzaj kod uważnie.",
              },
            ],
          },
          {
            id: "css-kaskada",
            tytul: "Kaskadowość, specyficzność i dziedziczenie",
            skrot:
              "Gdy kilka reguł dotyczy tego samego elementu, wygrywa ta o większej specyficzności lub zapisana później; część właściwości jest dziedziczona.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "„Kaskadowe” oznacza, że do jednego elementu może pasować wiele reguł. Przeglądarka ustala, która wygrywa, według kolejnych kroków:",
              },
              {
                typ: "kroki",
                elementy: [
                  "`!important` przy deklaracji wygrywa ze wszystkim (używaj rzadko).",
                  "Styl lokalny (atrybut `style`) wygrywa z regułami z arkuszy.",
                  "Wygrywa selektor o **wyższej specyficzności** (dokładniejszy).",
                  "Przy równej specyficzności wygrywa reguła zapisana **później**.",
                ],
              },
              {
                typ: "h",
                tekst: "Specyficzność (waga selektora)",
              },
              {
                typ: "tabela",
                naglowki: ["Selektor", "Waga", "Przykład"],
                wiersze: [
                  ["Styl inline", "1-0-0-0", '`style="…"`'],
                  ["Identyfikator", "0-1-0-0", "`#menu`"],
                  [
                    "Klasa, pseudoklasa, atrybut",
                    "0-0-1-0",
                    '`.cena`, `:hover`, `[type="text"]`',
                  ],
                  ["Element, pseudoelement", "0-0-0-1", "`p`, `::before`"],
                  ["Selektor uniwersalny", "0", "`*`"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "p { color: black; }\n.info { color: green; }\n#opis { color: red; }\np { color: blue; }",
              },
              {
                typ: "p",
                tekst:
                  'Akapit `<p id="opis" class="info">` będzie **czerwony**, bo `#opis` ma najwyższą wagę. Akapit bez klasy i id będzie niebieski — dwie reguły `p` mają tę samą wagę, wygrywa późniejsza.',
              },
              {
                typ: "h",
                tekst: "Dziedziczenie",
              },
              {
                typ: "p",
                tekst:
                  "Niektóre właściwości przechodzą z rodzica na dzieci. Jeśli ustawisz czcionkę dla `body`, cała strona ją przejmie.",
              },
              {
                typ: "lista",
                elementy: [
                  "Dziedziczone: `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `list-style`.",
                  "Niedziedziczone: `margin`, `padding`, `border`, `background`, `width`, `height`.",
                  "Wymuszenie dziedziczenia: wartość `inherit`.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Arkusze często zaczynają się od „Ogólne formatowanie: krój czcionki Arial” — wystarczy ustawić `font-family` na `body`, a resztę elementów obejmie dziedziczenie.",
              },
            ],
          },
        ],
      },
      {
        id: "css-selektory",
        tytul: "Selektory",
        tematy: [
          {
            id: "css-selektory-podstawowe",
            tytul: "Selektory podstawowe",
            skrot:
              "Selektor elementu, klasy `.klasa`, identyfikatora `#id`, uniwersalny `*`, grupowanie przecinkiem i łączenie `p.klasa`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Selektor", "Zapis", "Wybiera"],
                wiersze: [
                  ["Elementu (typu)", "`p`", "wszystkie akapity"],
                  ["Klasy", "`.cena`", 'elementy z `class="cena"`'],
                  [
                    "Identyfikatora",
                    "`#baner`",
                    'element z `id="baner"` (jeden na stronie)',
                  ],
                  ["Uniwersalny", "`*`", "wszystkie elementy"],
                  [
                    "Grupowanie",
                    "`h1, h2, h3`",
                    "wszystkie trzy rodzaje nagłówków",
                  ],
                  [
                    "Element z klasą",
                    "`p.wazne`",
                    "tylko akapity z klasą `wazne`",
                  ],
                  [
                    "Kilka klas naraz",
                    "`.btn.duzy`",
                    "elementy mające obie klasy",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<div id="baner">Baner</div>\n<p class="wazne">Ważny akapit</p>\n<span class="wazne">Ważny span</span>',
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "* {\n  margin: 0;\n  padding: 0;\n}\n#baner {\n  background-color: teal;\n}\n.wazne {\n  color: red;\n}\np.wazne {\n  font-weight: bold;\n}\nh1, h2, h3 {\n  font-family: Georgia, serif;\n}",
              },
              {
                typ: "p",
                tekst:
                  "Klasa `.wazne` zabarwi na czerwono akapit i span, ale pogrubiony będzie tylko akapit, bo `p.wazne` dotyczy wyłącznie `<p>`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Najczęstsze pytanie z CSS: „Który selektor odnosi się do elementu o identyfikatorze `menu`?” — `#menu`. „Do elementów klasy `menu`?” — `.menu`. Zapamiętaj: **#** = id, **kropka** = klasa.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Uważaj na spację: `p.wazne` (akapit z klasą) to coś innego niż `p .wazne` (element z klasą **wewnątrz** akapitu).",
              },
            ],
          },
          {
            id: "css-kombinatory",
            tytul: "Kombinatory i selektory atrybutów",
            skrot:
              'Selektor potomka (spacja), dziecka `>`, sąsiada `+`, rodzeństwa `~` oraz selektory atrybutów `[type="text"]`.',
            tresc: [
              {
                typ: "p",
                tekst:
                  "Kombinatory wybierają elementy na podstawie ich **położenia** w drzewie HTML.",
              },
              {
                typ: "tabela",
                naglowki: ["Zapis", "Nazwa", "Wybiera"],
                wiersze: [
                  [
                    "`div p`",
                    "potomek (spacja)",
                    "każdy `<p>` wewnątrz `<div>`, na dowolnym poziomie",
                  ],
                  [
                    "`div > p`",
                    "dziecko",
                    "tylko `<p>` będące **bezpośrednim** dzieckiem `<div>`",
                  ],
                  [
                    "`h2 + p`",
                    "sąsiad bezpośredni",
                    "pierwszy `<p>` zaraz po `<h2>`",
                  ],
                  [
                    "`h2 ~ p`",
                    "rodzeństwo",
                    "wszystkie `<p>` po `<h2>` na tym samym poziomie",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<div id="menu">\n  <p>Akapit 1</p>\n  <section>\n    <p>Akapit 2</p>\n  </section>\n</div>',
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#menu p {\n  color: blue;\n}\n#menu > p {\n  font-weight: bold;\n}",
              },
              {
                typ: "p",
                tekst:
                  "Oba akapity będą niebieskie (są potomkami `#menu`), ale pogrubiony będzie tylko „Akapit 1”, bo tylko on jest bezpośrednim dzieckiem.",
              },
              {
                typ: "h",
                tekst: "Selektory atrybutów",
              },
              {
                typ: "tabela",
                naglowki: ["Zapis", "Wybiera"],
                wiersze: [
                  ["`[title]`", "elementy, które mają atrybut `title`"],
                  ['`input[type="text"]`', "pola tekstowe"],
                  [
                    '`a[href^="https"]`',
                    "linki, których adres **zaczyna się** od https",
                  ],
                  [
                    '`a[href$=".pdf"]`',
                    "linki, których adres **kończy się** na .pdf",
                  ],
                  [
                    '`img[alt*="kot"]`',
                    "obrazy, których `alt` **zawiera** słowo kot",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: 'input[type="text"] {\n  border: 1px solid gray;\n}',
              },
              {
                typ: "egzamin",
                tekst:
                  "Klasyczne pytanie: „Który selektor wybierze obrazy umieszczone wewnątrz akapitów?” — `p img`. Pułapki: `p, img` (grupowanie — wszystkie akapity i wszystkie obrazy), `p.img` (akapit z klasą img), `img p`.",
              },
            ],
          },
          {
            id: "css-pseudoklasy",
            tytul: "Pseudoklasy",
            skrot:
              "Stany elementów: `:link`, `:visited`, `:hover`, `:active`, `:focus` oraz pozycje: `:first-child`, `:last-child`, `:nth-child()`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Pseudoklasa opisuje **stan** elementu lub jego **pozycję**. Zapisujemy ją po dwukropku, bez spacji: `a:hover`.",
              },
              {
                typ: "h",
                tekst: "Stany odnośników i pól",
              },
              {
                typ: "tabela",
                naglowki: ["Pseudoklasa", "Kiedy działa"],
                wiersze: [
                  ["`:link`", "link jeszcze nieodwiedzony"],
                  ["`:visited`", "link już odwiedzony"],
                  ["`:hover`", "kursor myszy jest nad elementem"],
                  [
                    "`:active`",
                    "element jest właśnie klikany (wciśnięty przycisk myszy)",
                  ],
                  [
                    "`:focus`",
                    "pole ma fokus (kursor w polu, wybrane klawiszem Tab)",
                  ],
                  ["`:checked`", "zaznaczony checkbox lub radio"],
                  ["`:disabled`", "pole wyłączone"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "a:link {\n  color: blue;\n}\na:visited {\n  color: purple;\n}\na:hover {\n  color: red;\n  text-decoration: underline;\n}\na:active {\n  color: orange;\n}\ninput:focus {\n  background-color: lightyellow;\n}",
              },
              {
                typ: "p",
                tekst:
                  "Kolejność reguł dla linków ma znaczenie: **L**ink, **V**isited, **H**over, **A**ctive (ang. „LoVe HAte”). Inaczej `:visited` może zasłonić `:hover`.",
              },
              {
                typ: "h",
                tekst: "Pseudoklasy strukturalne",
              },
              {
                typ: "tabela",
                naglowki: ["Pseudoklasa", "Wybiera"],
                wiersze: [
                  [
                    "`:first-child`",
                    "element będący pierwszym dzieckiem rodzica",
                  ],
                  ["`:last-child`", "ostatnie dziecko"],
                  ["`:nth-child(3)`", "trzecie dziecko"],
                  ["`:nth-child(even)` / `(2n)`", "parzyste: 2, 4, 6…"],
                  ["`:nth-child(odd)` / `(2n+1)`", "nieparzyste: 1, 3, 5…"],
                  [
                    "`:not(.klasa)`",
                    "elementy, które **nie** pasują do selektora",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "li:first-child {\n  font-weight: bold;\n}\ntr:nth-child(even) {\n  background-color: #EEEEEE;\n}",
              },
              {
                typ: "wynik",
                html: '<table style="border-collapse:collapse;">\n  <tr><td style="padding:3px 12px;">Wiersz 1 (odd)</td></tr>\n  <tr style="background:#EEEEEE;"><td style="padding:3px 12px;">Wiersz 2 (even)</td></tr>\n  <tr><td style="padding:3px 12px;">Wiersz 3 (odd)</td></tr>\n  <tr style="background:#EEEEEE;"><td style="padding:3px 12px;">Wiersz 4 (even)</td></tr>\n</table>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Bardzo częste w arkuszach: „odnośniki: kolor X, bez podkreślenia; po najechaniu kursorem: kolor Y, podkreślenie” — `a { … }` i `a:hover { … }`. Także „pole edycyjne w stanie aktywnym ma kolor tła …” — `input:focus`. W teście: „Który zapis ustawi kolor żółty dla linków nieodwiedzonych i zielony dla odwiedzonych?” — `a:link { color: yellow; } a:visited { color: green; }`.",
              },
            ],
          },
          {
            id: "css-pseudoelementy",
            tytul: "Pseudoelementy",
            skrot:
              "`::first-letter`, `::first-line`, `::before`, `::after`, `::selection` — stylowanie części elementu lub dodawanie treści.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Pseudoelement wybiera **fragment** elementu, który nie jest osobnym znacznikiem w HTML. Zapisujemy go z dwoma dwukropkami `::` (stara forma z jednym dwukropkiem też działa).",
              },
              {
                typ: "tabela",
                naglowki: ["Pseudoelement", "Działanie"],
                wiersze: [
                  ["`::first-letter`", "pierwsza litera (np. inicjał)"],
                  ["`::first-line`", "pierwsza linia tekstu"],
                  [
                    "`::before`",
                    "wstawia treść przed zawartością elementu (wymaga `content`)",
                  ],
                  [
                    "`::after`",
                    "wstawia treść po zawartości elementu (wymaga `content`)",
                  ],
                  ["`::selection`", "tekst zaznaczony myszą"],
                  ["`::placeholder`", "tekst podpowiedzi w polu formularza"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: 'p::first-letter {\n  font-size: 200%;\n  color: darkred;\n}\n.cena::after {\n  content: " zł";\n}\nli::before {\n  content: "» ";\n}',
              },
              {
                typ: "wynik",
                html: '<p><span style="font-size:200%;color:darkred;">W</span> dawnych księgach pierwsza litera rozdziału była duża i ozdobna.</p>\n<p>Cena: <span>49</span> zł</p>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie testowe: „Aby powiększyć pierwszą literę akapitu, należy użyć…” — `p::first-letter`. Nie myl z `:first-child` (pierwszy element w rodzicu).",
              },
              {
                typ: "uwaga",
                tekst:
                  '`::before` i `::after` nic nie wyświetlą bez właściwości `content`, nawet pustej: `content: "";`.',
              },
            ],
          },
        ],
      },
      {
        id: "css-wartosci",
        tytul: "Kolory, jednostki i tekst",
        tematy: [
          {
            id: "css-kolory",
            tytul: "Kolory",
            skrot:
              "Zapisy kolorów: nazwy, `#RRGGBB`, `#RGB`, `rgb()`, `rgba()` z przezroczystością, `hsl()`; przeliczanie dziesiętne na szesnastkowe.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Zapis", "Przykład", "Opis"],
                wiersze: [
                  [
                    "Nazwa",
                    "`red`, `navy`, `teal`",
                    "ok. 140 nazw angielskich",
                  ],
                  [
                    "HEX",
                    "`#FF0000`",
                    "szesnastkowo: 2 cyfry na R, G, B (00-FF)",
                  ],
                  [
                    "HEX skrócony",
                    "`#F00`",
                    "każda cyfra podwojona: `#F00` = `#FF0000`",
                  ],
                  ["RGB", "`rgb(255, 0, 0)`", "składowe dziesiętnie 0-255"],
                  [
                    "RGBA",
                    "`rgba(255, 0, 0, 0.5)`",
                    "czwarty parametr to kanał alfa (krycie): 0 — przezroczysty, 1 — pełny",
                  ],
                  [
                    "HSL",
                    "`hsl(0, 100%, 50%)`",
                    "barwa (0-360°), nasycenie, jasność",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Najważniejsze kolory w HEX",
              },
              {
                typ: "tabela",
                naglowki: ["HEX", "RGB", "Kolor"],
                wiersze: [
                  ["`#000000`", "`rgb(0, 0, 0)`", "czarny"],
                  ["`#FFFFFF`", "`rgb(255, 255, 255)`", "biały"],
                  ["`#FF0000`", "`rgb(255, 0, 0)`", "czerwony"],
                  ["`#00FF00`", "`rgb(0, 255, 0)`", "zielony (lime)"],
                  ["`#0000FF`", "`rgb(0, 0, 255)`", "niebieski"],
                  ["`#FFFF00`", "`rgb(255, 255, 0)`", "żółty"],
                  ["`#808080`", "`rgb(128, 128, 128)`", "szary"],
                ],
              },
              {
                typ: "wynik",
                html: '<div style="display:flex;gap:6px;flex-wrap:wrap;font-size:12px;">\n  <div style="background:#FF0000;color:#fff;padding:8px;">#FF0000</div>\n  <div style="background:#00FF00;padding:8px;">#00FF00</div>\n  <div style="background:#0000FF;color:#fff;padding:8px;">#0000FF</div>\n  <div style="background:#FFFF00;padding:8px;">#FFFF00</div>\n  <div style="background:rgba(255,0,0,0.3);padding:8px;">rgba(255,0,0,0.3)</div>\n</div>',
              },
              {
                typ: "h",
                tekst: "Przeliczanie na HEX",
              },
              {
                typ: "p",
                tekst:
                  "Każdą składową dzielimy przez 16: wynik całkowity to pierwsza cyfra, reszta — druga. Cyfry powyżej 9 to litery: A=10, B=11, C=12, D=13, E=14, F=15.",
              },
              {
                typ: "kroki",
                elementy: [
                  "Przykład: `rgb(255, 128, 16)`.",
                  "255 = 15·16 + 15 → `FF`.",
                  "128 = 8·16 + 0 → `80`.",
                  "16 = 1·16 + 0 → `10`.",
                  "Wynik: `#FF8010`.",
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#baner {\n  background-color: #1E90FF;\n  color: white;\n}\n.nakladka {\n  background-color: rgba(0, 0, 0, 0.6);\n}",
              },
              {
                typ: "egzamin",
                tekst:
                  "Bardzo częste zadanie testowe: przelicz `rgb(…)` na zapis szesnastkowy lub odwrotnie. Ćwicz: `rgb(128, 16, 8)` = `#801008`. W arkuszach kolory podaje się zwykle w HEX, np. „kolor tła #4B6584”.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`color` to kolor **tekstu**, a `background-color` — kolor **tła**. To najczęstsza pomyłka na egzaminie praktycznym.",
              },
            ],
          },
          {
            id: "css-jednostki",
            tytul: "Jednostki miar",
            skrot:
              "Jednostki bezwzględne (`px`, `pt`, `cm`) i względne (`%`, `em`, `rem`, `vw`, `vh`) — od czego zależą.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Jednostka", "Rodzaj", "Względem czego"],
                wiersze: [
                  ["`px`", "bezwzględna (ekranowa)", "piksel ekranu"],
                  [
                    "`pt`",
                    "bezwzględna",
                    "punkt typograficzny (1/72 cala) — głównie do druku",
                  ],
                  [
                    "`cm`, `mm`, `in`",
                    "bezwzględne",
                    "jednostki fizyczne, do druku",
                  ],
                  ["`%`", "względna", "rozmiaru rodzica (szerokość, czcionka)"],
                  [
                    "`em`",
                    "względna",
                    "rozmiaru czcionki **rodzica** (lub samego elementu dla odstępów)",
                  ],
                  [
                    "`rem`",
                    "względna",
                    "rozmiaru czcionki elementu **głównego** `html` (zwykle 16px)",
                  ],
                  ["`vw`", "względna", "1% szerokości okna przeglądarki"],
                  ["`vh`", "względna", "1% wysokości okna przeglądarki"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "html {\n  font-size: 16px;\n}\n#lewy {\n  width: 30%;\n  height: 400px;\n}\n.opis {\n  font-size: 1.5em;\n  padding: 1rem;\n}\n#baner {\n  height: 20vh;\n}",
              },
              {
                typ: "p",
                tekst:
                  "Jeśli rodzic ma czcionkę 20px, to `1.5em` w dziecku da 30px. Natomiast `1rem` zawsze odnosi się do elementu `html`, więc da 16px niezależnie od rodzica.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Która jednostka jest względna i zależy od rozmiaru czcionki elementu nadrzędnego?” — `em`. „Która zależy od elementu głównego?” — `rem`. W arkuszach szerokości paneli podaje się w `%` (np. 35% i 65%), a wysokości w `px`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Szerokości w procentach muszą sumować się do 100%, inaczej panele nie zmieszczą się w jednej linii. Pamiętaj, że `padding` i `border` zwiększają rzeczywistą szerokość (zobacz `box-sizing`).",
              },
            ],
          },
          {
            id: "css-czcionki",
            tytul: "Czcionki",
            skrot:
              "Właściwości `font-family`, `font-size`, `font-weight`, `font-style`, `font-variant` i skrót `font`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Przykładowe wartości", "Działanie"],
                wiersze: [
                  [
                    "`font-family`",
                    "`Arial, sans-serif`",
                    "krój czcionki (kilka zapasowych po przecinku)",
                  ],
                  [
                    "`font-size`",
                    "`16px`, `1.2em`, `120%`, `large`",
                    "rozmiar",
                  ],
                  [
                    "`font-weight`",
                    "`normal`, `bold`, `bolder`, `100`-`900`",
                    "grubość (`bold` = 700)",
                  ],
                  ["`font-style`", "`normal`, `italic`, `oblique`", "kursywa"],
                  ["`font-variant`", "`small-caps`", "kapitaliki"],
                  [
                    "`font`",
                    "`italic bold 16px Arial`",
                    "skrót kilku właściwości",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: 'body {\n  font-family: Tahoma, Verdana, sans-serif;\n  font-size: 14px;\n}\nh1 {\n  font-family: "Times New Roman", serif;\n  font-weight: bold;\n}\nem {\n  font-style: italic;\n}\n.male {\n  font-variant: small-caps;\n}',
              },
              {
                typ: "wynik",
                html: '<p style="font-family:Arial,sans-serif;">Arial (bezszeryfowa)</p>\n<p style="font-family:\'Times New Roman\',serif;">Times New Roman (szeryfowa)</p>\n<p style="font-family:\'Courier New\',monospace;">Courier New (o stałej szerokości)</p>\n<p style="font-weight:bold;font-style:italic;">Pogrubiona kursywa</p>\n<p style="font-variant:small-caps;">Kapitaliki</p>',
              },
              {
                typ: "h",
                tekst: "Rodziny ogólne",
              },
              {
                typ: "lista",
                elementy: [
                  "`serif` — szeryfowe (z „ozdobnikami”), np. Times New Roman.",
                  "`sans-serif` — bezszeryfowe, np. Arial, Verdana, Tahoma.",
                  "`monospace` — o stałej szerokości znaku, np. Courier New.",
                  "`cursive`, `fantasy` — ozdobne.",
                ],
              },
              {
                typ: "p",
                tekst:
                  "Nazwę kroju ze spacjami bierzemy w cudzysłów. Na końcu listy podajemy rodzinę ogólną — przeglądarka użyje jej, gdy nie ma żadnej z wymienionych czcionek.",
              },
              {
                typ: "egzamin",
                tekst:
                  "„Właściwość określająca krój czcionki to…” — `font-family` (pułapki: `font-type`, `font-face`, `font-style`). „Kursywa” — `font-style: italic`. „Pogrubienie” — `font-weight: bold`.",
              },
            ],
          },
          {
            id: "css-tekst",
            tytul: "Formatowanie tekstu",
            skrot:
              "Wyrównanie, dekoracja, wielkość liter, wcięcie, interlinia, odstępy między literami i słowami oraz cień tekstu.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Wartości", "Działanie"],
                wiersze: [
                  ["`color`", "`#333`, `red`", "kolor tekstu"],
                  [
                    "`text-align`",
                    "`left`, `right`, `center`, `justify`",
                    "wyrównanie poziome (`justify` — do obu krawędzi)",
                  ],
                  [
                    "`text-decoration`",
                    "`none`, `underline`, `overline`, `line-through`",
                    "podkreślenie, nadkreślenie, przekreślenie",
                  ],
                  [
                    "`text-transform`",
                    "`uppercase`, `lowercase`, `capitalize`",
                    "WIELKIE, małe, Pierwsza Wielka",
                  ],
                  [
                    "`text-indent`",
                    "`30px`",
                    "wcięcie pierwszego wiersza akapitu",
                  ],
                  [
                    "`line-height`",
                    "`1.5`, `24px`, `150%`",
                    "wysokość linii (interlinia)",
                  ],
                  [
                    "`letter-spacing`",
                    "`3px`",
                    "odstęp między literami (rozstrzelenie)",
                  ],
                  ["`word-spacing`", "`10px`", "odstęp między wyrazami"],
                  [
                    "`text-shadow`",
                    "`2px 2px 4px gray`",
                    "cień tekstu: przesunięcie X, Y, rozmycie, kolor",
                  ],
                  [
                    "`vertical-align`",
                    "`middle`, `top`, `bottom`",
                    "wyrównanie pionowe (komórki, obrazy w linii)",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#baner h1 {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  text-shadow: 2px 2px 3px gray;\n}\np {\n  text-indent: 20px;\n  line-height: 1.6;\n  text-align: justify;\n}\na {\n  text-decoration: none;\n}",
              },
              {
                typ: "wynik",
                html: '<p style="text-transform:uppercase;letter-spacing:4px;text-shadow:2px 2px 3px gray;font-size:20px;text-align:center;margin:4px;">Baner strony</p>\n<p style="text-decoration:underline;">underline</p>\n<p style="text-decoration:line-through;">line-through</p>\n<p style="text-decoration:overline;">overline</p>\n<p style="text-indent:30px;line-height:1.6;">Ten akapit ma wcięcie pierwszego wiersza równe 30 pikseli oraz zwiększoną interlinię, dzięki czemu łatwiej go czytać.</p>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe polecenia z arkuszy: „odnośniki bez podkreślenia” (`text-decoration: none`), „tekst wyrównany do środka” (`text-align: center`), „czcionka wielkimi literami” (`text-transform: uppercase`), „interlinia 150%”. W teście: „rozstrzelenie liter” to `letter-spacing`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`text-align: center` wyśrodkowuje **tekst i elementy liniowe** wewnątrz bloku (np. obraz), a nie sam blok. Blok o ustalonej szerokości wyśrodkujesz przez `margin: 0 auto;`.",
              },
            ],
          },
        ],
      },
      {
        id: "css-pudelko",
        tytul: "Model pudełkowy i tła",
        tematy: [
          {
            id: "css-model-pudelkowy",
            tytul: "Model pudełkowy",
            skrot:
              "Każdy element to pudełko: treść, `padding`, `border`, `margin`; skróty z 1-4 wartościami i `box-sizing`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Każdy element na stronie to prostokątne **pudełko** złożone z czterech warstw, od środka:",
              },
              {
                typ: "kroki",
                elementy: [
                  "**content** — treść (`width`, `height`).",
                  "**padding** — margines wewnętrzny (dopełnienie), między treścią a ramką. Ma kolor tła elementu.",
                  "**border** — obramowanie.",
                  "**margin** — margines zewnętrzny, odstęp od innych elementów. Zawsze przezroczysty.",
                ],
              },
              {
                typ: "wynik",
                html: '<div style="background:#ffe0b2;padding:14px;display:inline-block;font-size:12px;font-family:sans-serif;">margin\n  <div style="border:6px solid #e65100;">\n    <div style="background:#c8e6c9;padding:14px;">padding\n      <div style="background:#90caf9;padding:10px 24px;text-align:center;">content</div>\n    </div>\n  </div>\n</div>',
              },
              {
                typ: "h",
                tekst: "Skróty margin i padding",
              },
              {
                typ: "tabela",
                naglowki: ["Zapis", "Znaczenie"],
                wiersze: [
                  ["`margin: 10px;`", "wszystkie 4 strony po 10px"],
                  [
                    "`margin: 10px 20px;`",
                    "góra i dół 10px, prawo i lewo 20px",
                  ],
                  [
                    "`margin: 10px 20px 30px;`",
                    "góra 10px, prawo i lewo 20px, dół 30px",
                  ],
                  [
                    "`margin: 10px 20px 30px 40px;`",
                    "góra, prawo, dół, lewo — **zgodnie z ruchem wskazówek zegara**",
                  ],
                  [
                    "`margin-left: 5px;`",
                    "tylko lewy (także `-top`, `-right`, `-bottom`)",
                  ],
                  [
                    "`margin: 0 auto;`",
                    "wyśrodkowanie bloku o ustalonej szerokości",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Rzeczywista szerokość i `box-sizing`",
              },
              {
                typ: "p",
                tekst:
                  "Domyślnie (`box-sizing: content-box`) `width` dotyczy **tylko treści**. Rzeczywista szerokość = width + padding (×2) + border (×2).",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: ".ramka {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n}",
              },
              {
                typ: "p",
                tekst:
                  "Ten element ma szerokość 200 + 2·20 + 2·5 = **250px** (plus marginesy 10px z każdej strony). Po dodaniu `box-sizing: border-box;` cały element ma 200px — padding i border mieszczą się w środku.",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "* {\n  box-sizing: border-box;\n}",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania: „Który parametr ustala margines wewnętrzny?” — `padding`. „Zapis `margin: 5px 10px 15px 20px` — ile wynosi lewy margines?” — 20px (kolejność: góra, prawo, dół, lewo). Arkusze używają słów: „marginesy wewnętrzne” = `padding`, „marginesy zewnętrzne” lub „marginesy” = `margin`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Pionowe marginesy sąsiednich bloków **nakładają się** (margin collapsing): `margin-bottom: 20px` i `margin-top: 30px` dadzą odstęp 30px, a nie 50px.",
              },
            ],
          },
          {
            id: "css-obramowanie",
            tytul: "Obramowanie, zaokrąglenie i cień",
            skrot:
              "`border` (grubość, styl, kolor), `border-radius`, `box-shadow` i `outline`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Obramowanie ma trzy cechy: grubość (`border-width`), styl (`border-style`) i kolor (`border-color`). Najczęściej używamy skrótu:",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "img {\n  border: 2px solid #333;\n  border-radius: 10px;\n  box-shadow: 5px 5px 10px gray;\n}\n.awatar {\n  border-radius: 50%;\n}\n#lewy {\n  border-right: 1px dashed black;\n}",
              },
              {
                typ: "tabela",
                naglowki: ["`border-style`", "Wygląd"],
                wiersze: [
                  ["`solid`", "linia ciągła"],
                  ["`dashed`", "kreskowana"],
                  ["`dotted`", "kropkowana"],
                  ["`double`", "podwójna"],
                  ["`groove`, `ridge`, `inset`, `outset`", "efekty 3D"],
                  ["`none`", "brak (bez stylu ramka się nie pokaże)"],
                ],
              },
              {
                typ: "wynik",
                html: '<div style="display:flex;gap:8px;flex-wrap:wrap;font-size:12px;">\n  <div style="border:3px solid #333;padding:8px;">solid</div>\n  <div style="border:3px dashed #333;padding:8px;">dashed</div>\n  <div style="border:3px dotted #333;padding:8px;">dotted</div>\n  <div style="border:4px double #333;padding:8px;">double</div>\n  <div style="border:2px solid #1565c0;border-radius:12px;padding:8px;">radius 12px</div>\n  <div style="background:#90caf9;border-radius:50%;width:40px;height:40px;"></div>\n  <div style="padding:8px;box-shadow:5px 5px 10px gray;">box-shadow</div>\n</div>',
              },
              {
                typ: "h",
                tekst: "Cień `box-shadow`",
              },
              {
                typ: "p",
                tekst:
                  "Kolejne wartości: przesunięcie poziome, przesunięcie pionowe, rozmycie, (opcjonalnie) rozciągnięcie, kolor. Słowo `inset` daje cień wewnętrzny.",
              },
              {
                typ: "h",
                tekst: "`outline`",
              },
              {
                typ: "p",
                tekst:
                  "`outline` to obrys rysowany **poza** ramką. Nie zajmuje miejsca i nie zmienia rozmiaru elementu. Przeglądarki pokazują go przy `:focus`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe polecenia: „obraz: zaokrąglenie narożników 20px” (`border-radius`), „cień o przesunięciu 10px 10px i rozmyciu 7px w kolorze …” (`box-shadow`), „obramowanie 1px linią ciągłą” (`border: 1px solid`). Obrazek zaokrąglony w koło: `border-radius: 50%`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Samo `border: 2px;` nie wyświetli ramki — brakuje stylu (np. `solid`).",
              },
            ],
          },
          {
            id: "css-tla",
            tytul: "Tła",
            skrot:
              "`background-color`, `background-image`, `background-repeat`, `background-position`, `background-size`, `background-attachment` i skrót `background`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Wartości", "Działanie"],
                wiersze: [
                  ["`background-color`", "`#EEE`, `rgba(…)`", "kolor tła"],
                  ["`background-image`", '`url("tlo.jpg")`', "obraz tła"],
                  [
                    "`background-repeat`",
                    "`repeat`, `repeat-x`, `repeat-y`, `no-repeat`",
                    "powtarzanie: wszędzie, poziomo, pionowo, wcale",
                  ],
                  [
                    "`background-position`",
                    "`center`, `top right`, `20px 50px`",
                    "położenie obrazu",
                  ],
                  [
                    "`background-size`",
                    "`cover`, `contain`, `100px 50px`",
                    "`cover` — wypełnia cały element, `contain` — mieści cały obraz",
                  ],
                  [
                    "`background-attachment`",
                    "`scroll`, `fixed`",
                    "`fixed` — tło stoi w miejscu podczas przewijania",
                  ],
                  [
                    "`background`",
                    '`#FFF url("a.png") no-repeat center`',
                    "skrót",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: 'body {\n  background-color: #FAFAFA;\n  background-image: url("tlo.png");\n  background-repeat: repeat-x;\n}\n#baner {\n  background: #2E86AB url("logo.png") no-repeat right center;\n}\n#glowny {\n  background-image: url("las.jpg");\n  background-size: cover;\n  background-attachment: fixed;\n}\n.gradient {\n  background-image: linear-gradient(to right, #FF8008, #FFC837);\n}',
              },
              {
                typ: "wynik",
                html: '<div style="height:40px;background-image:linear-gradient(to right,#FF8008,#FFC837);border-radius:6px;color:#fff;padding:8px;font-family:sans-serif;">linear-gradient(to right, …)</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Tło ma być nieruchome względem okna przeglądarki” — `background-attachment: fixed`. „Obraz tła powtarzany tylko w poziomie” — `background-repeat: repeat-x`. W arkuszach często: „tło strony w kolorze …”, „obraz tła powtarzany w pionie”.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Ścieżka w `url()` jest liczona względem **pliku CSS**, a nie pliku HTML.",
              },
            ],
          },
          {
            id: "css-display",
            tytul: "Display, visibility, overflow i inne",
            skrot:
              "Sposób wyświetlania (`display`), ukrywanie (`display: none` vs `visibility: hidden`), `overflow`, `opacity` i `cursor`.",
            tresc: [
              {
                typ: "h",
                tekst: "display",
              },
              {
                typ: "tabela",
                naglowki: ["Wartość", "Działanie"],
                wiersze: [
                  [
                    "`block`",
                    "element blokowy: nowa linia, pełna szerokość, działa `width`/`height`",
                  ],
                  [
                    "`inline`",
                    "element liniowy: w linii z tekstem, `width`/`height` nie działają",
                  ],
                  [
                    "`inline-block`",
                    "w linii, ale można ustawić `width`, `height` i pionowe marginesy",
                  ],
                  ["`none`", "element znika i **nie zajmuje miejsca**"],
                  ["`flex`, `grid`", "kontener układu elastycznego / siatki"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "nav a {\n  display: inline-block;\n  width: 120px;\n  padding: 10px;\n}\n.ukryty {\n  display: none;\n}",
              },
              {
                typ: "h",
                tekst: "display: none czy visibility: hidden?",
              },
              {
                typ: "wynik",
                html: '<div style="font-size:13px;font-family:sans-serif;">\n  <p style="margin:2px;">visibility: hidden — miejsce zostaje:</p>\n  <span style="background:#90caf9;padding:4px;">A</span><span style="background:#ffcc80;padding:4px;visibility:hidden;">B</span><span style="background:#a5d6a7;padding:4px;">C</span>\n  <p style="margin:2px;">display: none — miejsce znika:</p>\n  <span style="background:#90caf9;padding:4px;">A</span><span style="background:#ffcc80;padding:4px;display:none;">B</span><span style="background:#a5d6a7;padding:4px;">C</span>\n</div>',
              },
              {
                typ: "h",
                tekst: "Inne przydatne właściwości",
              },
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Przykład", "Działanie"],
                wiersze: [
                  [
                    "`overflow`",
                    "`hidden`, `scroll`, `auto`",
                    "co zrobić z treścią, która nie mieści się w elemencie",
                  ],
                  [
                    "`opacity`",
                    "`0.5`",
                    "przezroczystość całego elementu z zawartością (0-1)",
                  ],
                  [
                    "`cursor`",
                    "`pointer`, `help`, `wait`, `move`",
                    "wygląd kursora nad elementem (`pointer` — rączka)",
                  ],
                  [
                    "`max-width`",
                    "`100%`",
                    "maksymalna szerokość (np. obrazy nie wychodzą poza blok)",
                  ],
                  ["`min-height`", "`300px`", "minimalna wysokość"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#prawy {\n  height: 400px;\n  overflow: auto;\n}\nimg:hover {\n  opacity: 0.6;\n  cursor: pointer;\n}",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Który zapis ukryje element tak, że nie będzie zajmował miejsca?” — `display: none`. `visibility: hidden` ukrywa, ale zostawia puste miejsce. Arkusze często wymagają: „po najechaniu na obraz zmienia się jego przezroczystość na 50%” — `img:hover { opacity: 0.5; }`.",
              },
            ],
          },
        ],
      },
      {
        id: "css-uklad",
        tytul: "Układ strony",
        tematy: [
          {
            id: "css-float",
            tytul: "Float i clear",
            skrot:
              "`float: left/right` ustawia bloki obok siebie lub sprawia, że tekst opływa obraz; `clear: both` kończy opływanie.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`float` (pływanie) przesuwa element do lewej lub prawej krawędzi rodzica. Kolejne elementy **opływają** go z boku. To najczęściej używany sposób budowania paneli na egzaminie.",
              },
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Wartości", "Działanie"],
                wiersze: [
                  [
                    "`float`",
                    "`left`, `right`, `none`",
                    "element przesuwa się w lewo / w prawo, reszta go opływa",
                  ],
                  [
                    "`clear`",
                    "`left`, `right`, `both`, `none`",
                    "element nie może stać obok pływających — przechodzi pod nie",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Obraz opływany tekstem",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "img {\n  float: left;\n  margin-right: 10px;\n}",
              },
              {
                typ: "wynik",
                html: '<div style="font-size:13px;">\n  <div style="float:left;width:60px;height:60px;background:#90caf9;margin-right:10px;"></div>\n  <p style="margin:0;">Tekst opływa niebieski prostokąt z prawej strony, ponieważ prostokąt ma ustawione float: left. Kiedy tekst zejdzie poniżej prostokąta, wraca do pełnej szerokości bloku. Dzięki temu łatwo zrobić zdjęcie z opisem obok.</p>\n  <div style="clear:both;"></div>\n</div>',
              },
              {
                typ: "h",
                tekst: "Panele obok siebie",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#lewy {\n  float: left;\n  width: 30%;\n}\n#prawy {\n  float: left;\n  width: 70%;\n}\n#stopka {\n  clear: both;\n}",
              },
              {
                typ: "wynik",
                html: '<div style="font-size:12px;text-align:center;font-family:sans-serif;">\n  <div style="float:left;width:30%;background:#90caf9;padding:16px 0;">lewy 30%</div>\n  <div style="float:left;width:70%;background:#e3f2fd;padding:16px 0;">prawy 70%</div>\n  <div style="clear:both;background:#1565c0;color:#fff;padding:6px;">stopka (clear: both)</div>\n</div>',
              },
              {
                typ: "p",
                tekst:
                  "Bez `clear: both` stopka „wjechałaby” pod pływające panele i pojawiłaby się obok nich lub za nimi.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Prawie każdy arkusz: „panel lewy: szerokość 25%, wysokość 600px”, „stopka: …”. Ustaw `float: left` dla paneli i `clear: both` dla stopki. Szerokości muszą dać razem 100%. Pytanie testowe: „Która właściwość wyłącza opływanie elementu przez elementy pływające?” — `clear`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Jeśli panele mają `padding` lub `border`, suma 30% + 70% przekroczy 100% i prawy panel spadnie pod lewy. Rozwiązanie: `box-sizing: border-box` albo zmniejszenie szerokości.",
              },
            ],
          },
          {
            id: "css-position",
            tytul: "Pozycjonowanie i z-index",
            skrot:
              "`position: static`, `relative`, `absolute`, `fixed`, `sticky`, przesunięcia `top`/`left` oraz kolejność warstw `z-index`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Wartość", "Względem czego", "Czy zajmuje miejsce"],
                wiersze: [
                  [
                    "`static`",
                    "domyślne położenie w przepływie, `top`/`left` nie działają",
                    "tak",
                  ],
                  [
                    "`relative`",
                    "swojego normalnego położenia",
                    "tak (puste miejsce zostaje)",
                  ],
                  [
                    "`absolute`",
                    "najbliższego przodka z pozycją inną niż `static` (lub strony)",
                    "nie",
                  ],
                  ["`fixed`", "okna przeglądarki — nie przewija się", "nie"],
                  [
                    "`sticky`",
                    "zachowuje się jak `relative`, aż do przewinięcia do progu, potem „przykleja się”",
                    "tak",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.karta {\n  position: relative;\n}\n.karta .znaczek {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 2;\n}",
              },
              {
                typ: "wynik",
                html: '<div style="position:relative;width:200px;height:80px;background:#e3f2fd;border:1px solid #90caf9;font-size:12px;font-family:sans-serif;">\n  <span style="padding:6px;display:inline-block;">.karta (relative)</span>\n  <span style="position:absolute;top:10px;right:10px;background:#e53935;color:#fff;padding:2px 6px;border-radius:4px;">absolute</span>\n  <span style="position:absolute;bottom:6px;left:30px;background:#90caf9;padding:4px 10px;z-index:1;">z-index 1</span>\n  <span style="position:absolute;bottom:12px;left:60px;background:#1565c0;color:#fff;padding:4px 10px;z-index:2;">z-index 2</span>\n</div>',
              },
              {
                typ: "p",
                tekst:
                  "`z-index` ustala, który element jest „wyżej” przy nakładaniu się. Większa liczba = bliżej użytkownika. Działa tylko dla elementów pozycjonowanych (nie `static`).",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania: „Element ma pozostać w tym samym miejscu okna przy przewijaniu” — `position: fixed`. „Element pozycjonowany względem najbliższego pozycjonowanego przodka” — `absolute`. „Która właściwość określa kolejność nakładania elementów?” — `z-index`.",
              },
            ],
          },
          {
            id: "css-flexbox",
            tytul: "Flexbox",
            skrot:
              "`display: flex` układa dzieci w rzędzie lub kolumnie; `justify-content`, `align-items`, `flex-direction`, `flex-wrap`, `gap`, `flex`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Flexbox to nowoczesny sposób układania elementów w **jednym wymiarze** — w wierszu lub w kolumnie. Ustawiamy `display: flex` na **rodzicu** (kontenerze), a jego dzieci stają się elementami elastycznymi.",
              },
              {
                typ: "tabela",
                naglowki: ["Właściwość kontenera", "Wartości", "Działanie"],
                wiersze: [
                  [
                    "`flex-direction`",
                    "`row` (domyślnie), `column`, `row-reverse`",
                    "kierunek osi głównej",
                  ],
                  [
                    "`justify-content`",
                    "`flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`",
                    "rozmieszczenie wzdłuż osi głównej (poziomo przy `row`)",
                  ],
                  [
                    "`align-items`",
                    "`stretch` (domyślnie), `center`, `flex-start`, `flex-end`",
                    "wyrównanie w osi poprzecznej (pionowo przy `row`)",
                  ],
                  [
                    "`flex-wrap`",
                    "`nowrap`, `wrap`",
                    "czy elementy mogą przejść do nowej linii",
                  ],
                  ["`gap`", "`10px`", "odstęp między elementami"],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Właściwość dziecka", "Działanie"],
                wiersze: [
                  [
                    "`flex: 1`",
                    "element zajmuje proporcjonalną część wolnego miejsca",
                  ],
                  ["`flex: 2`", "dwa razy więcej niż element z `flex: 1`"],
                  ["`order`", "kolejność wyświetlania"],
                  ["`align-self`", "własne wyrównanie w osi poprzecznej"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n.galeria {\n  display: flex;\n  flex-wrap: wrap;\n}",
              },
              {
                typ: "wynik",
                html: '<div style="font-size:12px;font-family:sans-serif;">\n  <div style="display:flex;justify-content:space-between;background:#e3f2fd;padding:4px;margin-bottom:6px;">\n    <span style="background:#1565c0;color:#fff;padding:6px;">1</span><span style="background:#1565c0;color:#fff;padding:6px;">2</span><span style="background:#1565c0;color:#fff;padding:6px;">3</span>\n  </div>\n  <div style="display:flex;justify-content:center;align-items:center;gap:10px;height:60px;background:#e3f2fd;">\n    <span style="background:#e65100;color:#fff;padding:6px;">center</span><span style="background:#e65100;color:#fff;padding:14px 6px;">center</span>\n  </div>\n</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: „Która właściwość wyśrodkuje elementy flex w poziomie (przy `flex-direction: row`)?” — `justify-content: center`. „W pionie?” — `align-items: center`. Zapamiętaj: **justify** = oś główna, **align** = oś poprzeczna.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Przy `flex-direction: column` osie się zamieniają: `justify-content` działa pionowo, a `align-items` poziomo.",
              },
            ],
          },
          {
            id: "css-grid",
            tytul: "Grid — podstawy",
            skrot:
              "`display: grid` tworzy dwuwymiarową siatkę: `grid-template-columns`, `grid-template-rows`, jednostka `fr`, `gap`, `grid-column`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Grid układa elementy w **dwóch wymiarach** — w wierszach i kolumnach jednocześnie. Jak tabela, ale do układu strony.",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: ".kontener {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 100px auto 50px;\n  gap: 10px;\n}\n.baner {\n  grid-column: 1 / 4;\n}",
              },
              {
                typ: "lista",
                elementy: [
                  "`grid-template-columns: 1fr 2fr 1fr` — trzy kolumny, środkowa dwa razy szersza.",
                  "`fr` (fraction) — część wolnego miejsca.",
                  "`repeat(3, 1fr)` — skrót dla `1fr 1fr 1fr`.",
                  "`grid-column: 1 / 4` — element rozciąga się od linii 1 do linii 4 (przez 3 kolumny), podobnie `grid-row`.",
                  "`gap` — odstęp między komórkami.",
                ],
              },
              {
                typ: "wynik",
                html: '<div style="display:grid;grid-template-columns:1fr 2fr 1fr;gap:6px;font-size:12px;text-align:center;font-family:sans-serif;">\n  <div style="grid-column:1 / 4;background:#1565c0;color:#fff;padding:8px;">baner (1 / 4)</div>\n  <div style="background:#90caf9;padding:16px 0;">1fr</div>\n  <div style="background:#e3f2fd;padding:16px 0;">2fr</div>\n  <div style="background:#90caf9;padding:16px 0;">1fr</div>\n  <div style="grid-column:1 / 4;background:#0d47a1;color:#fff;padding:6px;">stopka</div>\n</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Grid pojawia się na egzaminie rzadziej niż float i flex, ale można go użyć do zbudowania układu z arkusza. Warto znać `display: grid` i `grid-template-columns`.",
              },
            ],
          },
          {
            id: "css-uklad-egzamin",
            tytul: "Typowy układ strony egzaminacyjnej",
            skrot:
              "Gotowy CSS dla bloków baner, lewy, prawy (główny) i stopka — w wersji z `float` i z `flex`.",
            tresc: [
              {
                typ: "p",
                tekst: "Typowe polecenie z arkusza wygląda tak (przykład):",
              },
              {
                typ: "lista",
                elementy: [
                  "Ogólne formatowanie: krój czcionki Verdana.",
                  "Baner: kolor tła #1F4E79, biały kolor czcionki, wyrównanie tekstu do środka, wysokość 100px.",
                  "Panel lewy: kolor tła #DDEBF7, szerokość 35%, wysokość 500px.",
                  "Panel prawy: kolor tła #9DC3E6, szerokość 65%, wysokość 500px.",
                  "Stopka: kolor tła #1F4E79, biały kolor czcionki, marginesy wewnętrzne 20px.",
                  "Obraz: zaokrąglenie narożników 15px, cień.",
                  "Odnośniki: bez podkreślenia, po najechaniu kursorem kolor pomarańczowy.",
                ],
              },
              {
                typ: "h",
                tekst: "Wersja z float",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<div id="baner"><h1>Wędkujemy</h1></div>\n<div id="lewy">…</div>\n<div id="prawy">…</div>\n<div id="stopka">Stronę wykonał: 00000000000</div>',
                tytul: "index.html",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "* {\n  font-family: Verdana, sans-serif;\n}\n#baner {\n  background-color: #1F4E79;\n  color: white;\n  text-align: center;\n  height: 100px;\n}\n#lewy {\n  background-color: #DDEBF7;\n  float: left;\n  width: 35%;\n  height: 500px;\n}\n#prawy {\n  background-color: #9DC3E6;\n  float: left;\n  width: 65%;\n  height: 500px;\n}\n#stopka {\n  background-color: #1F4E79;\n  color: white;\n  padding: 20px;\n  clear: both;\n}\nimg {\n  border-radius: 15px;\n  box-shadow: 5px 5px 10px gray;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  color: orange;\n}",
                tytul: "styl.css (float)",
              },
              {
                typ: "h",
                tekst: "Wersja z flex",
              },
              {
                typ: "p",
                tekst:
                  "Panele owijamy wspólnym kontenerem i ustawiamy mu `display: flex`. Stopka nie potrzebuje wtedy `clear`.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<header id="baner"><h1>Wędkujemy</h1></header>\n<main id="panele">\n  <section id="lewy">…</section>\n  <section id="prawy">…</section>\n</main>\n<footer id="stopka">Stronę wykonał: 00000000000</footer>',
                tytul: "index.html",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#panele {\n  display: flex;\n}\n#lewy {\n  background-color: #DDEBF7;\n  width: 35%;\n  height: 500px;\n}\n#prawy {\n  background-color: #9DC3E6;\n  width: 65%;\n  height: 500px;\n}",
                tytul: "styl.css (flex — tylko zmienione reguły)",
              },
              {
                typ: "wynik",
                html: '<div style="font-family:Verdana,sans-serif;font-size:12px;">\n  <div style="background:#1F4E79;color:#fff;text-align:center;height:40px;line-height:40px;">baner</div>\n  <div style="display:flex;">\n    <div style="background:#DDEBF7;width:35%;height:80px;padding:6px;box-sizing:border-box;">lewy 35%</div>\n    <div style="background:#9DC3E6;width:65%;height:80px;padding:6px;box-sizing:border-box;">prawy 65%</div>\n  </div>\n  <div style="background:#1F4E79;color:#fff;padding:8px;">stopka</div>\n</div>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Za CSS na egzaminie praktycznym przyznaje się kilka punktów, każdy za konkretne kryterium (np. „panel lewy: szerokość 35% i wysokość 500px”). Pisz właściwości **dokładnie** z polecenia — kolor `#DDEBF7` to nie „jakiś jasnoniebieski”. Sprawdź w przeglądarce, czy panele są obok siebie, a stopka pod nimi.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Nie dodawaj `padding` ani `border` do paneli z sumą szerokości 100% bez `box-sizing: border-box` — prawy panel spadnie pod lewy.",
              },
            ],
          },
        ],
      },
      {
        id: "css-dodatki",
        tytul: "Listy, tabele, responsywność i efekty",
        tematy: [
          {
            id: "css-listy",
            tytul: "Stylowanie list",
            skrot:
              "`list-style-type`, `list-style-image`, `list-style-position`, usuwanie punktorów i menu poziome z listy.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Wartości"],
                wiersze: [
                  [
                    "`list-style-type`",
                    "`disc` (kółko, domyślnie), `circle` (okrąg), `square` (kwadrat), `none`, `decimal`, `lower-alpha`, `upper-roman`",
                  ],
                  [
                    "`list-style-image`",
                    '`url("punktor.png")` — własny obrazek jako punktor',
                  ],
                  [
                    "`list-style-position`",
                    "`outside` (domyślnie), `inside` — punktor wewnątrz bloku tekstu",
                  ],
                  ["`list-style`", "skrót: `square inside`"],
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: 'ul {\n  list-style-type: square;\n}\nol {\n  list-style-type: upper-roman;\n}\n.ikony {\n  list-style-image: url("strzalka.png");\n}',
              },
              {
                typ: "wynik",
                html: '<div style="display:flex;gap:30px;font-size:13px;">\n  <ul style="list-style-type:disc;margin:0;"><li>disc</li><li>disc</li></ul>\n  <ul style="list-style-type:circle;margin:0;"><li>circle</li><li>circle</li></ul>\n  <ul style="list-style-type:square;margin:0;"><li>square</li><li>square</li></ul>\n  <ol style="list-style-type:upper-roman;margin:0;"><li>roman</li><li>roman</li></ol>\n</div>',
              },
              {
                typ: "h",
                tekst: "Menu poziome z listy",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "nav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nnav li {\n  display: inline-block;\n  margin-right: 15px;\n}",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania testowe: „Które formatowanie wyświetli punktory w kształcie kwadratu?” — `list-style-type: square`. „Własny obrazek jako punktor?” — `list-style-image`. W arkuszu: „lista z punktorami w kształcie okręgu” — `circle`.",
              },
            ],
          },
          {
            id: "css-tabele",
            tytul: "Stylowanie tabel",
            skrot:
              "`border-collapse`, obramowanie komórek, `padding`, wyrównanie, kolorowanie co drugiego wiersza i efekt `:hover` na wierszu.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Domyślnie każda komórka ma osobną ramkę, więc między komórkami widać podwójne linie. `border-collapse: collapse` łączy je w pojedyncze.",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "table {\n  border-collapse: collapse;\n  width: 100%;\n}\ntable, th, td {\n  border: 1px solid #555;\n}\nth, td {\n  padding: 5px;\n  text-align: center;\n}\nth {\n  background-color: #4682B4;\n  color: white;\n}\ntr:nth-child(even) {\n  background-color: #F2F2F2;\n}\ntr:hover {\n  background-color: #FFE4B5;\n}",
              },
              {
                typ: "wynik",
                html: '<div style="display:flex;gap:20px;flex-wrap:wrap;font-size:12px;">\n  <table style="border:1px solid #555;"><tr><td style="border:1px solid #555;padding:4px;">separate</td><td style="border:1px solid #555;padding:4px;">(domyślnie)</td></tr><tr><td style="border:1px solid #555;padding:4px;">A</td><td style="border:1px solid #555;padding:4px;">B</td></tr></table>\n  <table style="border-collapse:collapse;"><tr><td style="border:1px solid #555;padding:4px;">collapse</td><td style="border:1px solid #555;padding:4px;">pojedyncze</td></tr><tr style="background:#F2F2F2;"><td style="border:1px solid #555;padding:4px;">A</td><td style="border:1px solid #555;padding:4px;">B</td></tr></table>\n</div>',
              },
              {
                typ: "tabela",
                naglowki: ["Właściwość", "Działanie"],
                wiersze: [
                  [
                    "`border-collapse: collapse`",
                    "łączy ramki sąsiednich komórek",
                  ],
                  [
                    "`border-spacing: 5px`",
                    "odstęp między ramkami (tylko gdy `separate`)",
                  ],
                  ["`padding` w `td`", "odstęp treści od ramki komórki"],
                  [
                    "`text-align`, `vertical-align`",
                    "wyrównanie w komórce poziomo i pionowo",
                  ],
                  ["`caption-side: bottom`", "podpis tabeli pod spodem"],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Prawie w każdym arkuszu: „tabela i komórki: obramowanie 1px linią ciągłą, łączenie obramowań (border-collapse)”, „marginesy wewnętrzne komórek 5px”. Pytanie testowe: „Która właściwość scala obramowania komórek w pojedynczą linię?” — `border-collapse: collapse`.",
              },
            ],
          },
          {
            id: "css-media",
            tytul: "Strony responsywne i media queries",
            skrot:
              "Reguła `@media` zmienia styl zależnie od szerokości ekranu; meta viewport, `max-width` i jednostki względne.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Strona **responsywna** dopasowuje się do ekranu: komputera, tabletu i telefonu. Podstawą są trzy rzeczy:",
              },
              {
                typ: "kroki",
                elementy: [
                  'W HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.',
                  "Szerokości w jednostkach względnych (`%`, `fr`, `vw`) i `max-width: 100%` dla obrazów.",
                  "Reguły `@media` dla różnych szerokości ekranu.",
                ],
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "#lewy, #prawy {\n  float: left;\n  width: 50%;\n}\nimg {\n  max-width: 100%;\n}\n@media (max-width: 600px) {\n  #lewy, #prawy {\n    float: none;\n    width: 100%;\n  }\n}\n@media print {\n  nav {\n    display: none;\n  }\n}",
              },
              {
                typ: "lista",
                elementy: [
                  "`@media (max-width: 600px)` — styl działa, gdy okno ma **co najwyżej** 600px (telefony).",
                  "`@media (min-width: 1024px)` — gdy okno ma **co najmniej** 1024px.",
                  "`@media print` — styl dla wydruku; `screen` — dla ekranu.",
                  "Warunki można łączyć: `@media screen and (max-width: 800px)`.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie testowe: „Która reguła zastosuje styl tylko dla ekranów o szerokości do 600px?” — `@media (max-width: 600px)`. Pamiętaj: **max-width** = ekrany mniejsze, **min-width** = większe.",
              },
            ],
          },
          {
            id: "css-przejscia",
            tytul: "Przejścia, transformacje i animacje",
            skrot:
              "`transition` płynnie zmienia właściwości (np. przy `:hover`), `transform` obraca, skaluje i przesuwa, `@keyframes` tworzy animacje.",
            tresc: [
              {
                typ: "h",
                tekst: "transition",
              },
              {
                typ: "p",
                tekst:
                  "`transition` sprawia, że zmiana wartości (np. przy najechaniu myszą) dzieje się płynnie, a nie skokowo. Podajemy: właściwość, czas, opcjonalnie funkcję tempa i opóźnienie.",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: ".przycisk {\n  background-color: steelblue;\n  transition: background-color 0.5s ease;\n}\n.przycisk:hover {\n  background-color: orange;\n}\nimg {\n  transition: transform 0.3s;\n}\nimg:hover {\n  transform: scale(1.2);\n}",
              },
              {
                typ: "h",
                tekst: "transform",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie"],
                wiersze: [
                  ["`scale(1.5)`", "powiększenie 1,5 raza"],
                  ["`rotate(45deg)`", "obrót o 45 stopni"],
                  ["`translate(20px, 10px)`", "przesunięcie"],
                  ["`skew(10deg)`", "pochylenie"],
                ],
              },
              {
                typ: "wynik",
                html: '<div style="display:flex;gap:24px;padding:10px;font-size:12px;font-family:sans-serif;">\n  <div style="width:50px;height:50px;background:#90caf9;transform:scale(1.2);text-align:center;line-height:50px;">scale</div>\n  <div style="width:50px;height:50px;background:#ffcc80;transform:rotate(20deg);text-align:center;line-height:50px;">rotate</div>\n  <div style="width:50px;height:50px;background:#a5d6a7;transform:skew(10deg);text-align:center;line-height:50px;">skew</div>\n</div>',
              },
              {
                typ: "h",
                tekst: "Animacje @keyframes",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "@keyframes migaj {\n  from { opacity: 1; }\n  to { opacity: 0.2; }\n}\n.alarm {\n  animation: migaj 1s infinite alternate;\n}",
              },
              {
                typ: "egzamin",
                tekst:
                  "W arkuszach pojawia się np. „po najechaniu kursorem obraz powiększa się” (`transform: scale()` w `:hover`) albo „przejście trwa 0.5s”. W teście możesz trafić na pytanie, która właściwość odpowiada za płynną zmianę — `transition`.",
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        pytanie:
          "Który styl ma najwyższy priorytet, jeśli wszystkie dotyczą tego samego elementu i mają tę samą specyficzność selektora?",
        odpowiedzi: [
          "styl wewnętrzny (`<style>`)",
          "styl zewnętrzny (plik .css)",
          "domyślny styl przeglądarki",
          "styl lokalny (atrybut `style`)",
        ],
        poprawna: 3,
        wyjasnienie:
          "Styl inline zapisany w atrybucie `style` wygrywa z regułami z arkuszy (poza `!important`).",
      },
      {
        pytanie:
          "Który selektor CSS odnosi się do elementu o identyfikatorze `menu`?",
        odpowiedzi: ["`menu`", "`#menu`", "`*menu`", "`.menu`"],
        poprawna: 1,
        wyjasnienie:
          "`#` oznacza identyfikator (`id`), kropka — klasę, a sama nazwa — znacznik.",
      },
      {
        pytanie:
          'Który selektor wybierze wszystkie elementy z atrybutem `class="cena"`?',
        odpowiedzi: ["`.cena`", "`[cena]`", "`#cena`", "`cena`"],
        poprawna: 0,
        wyjasnienie: "Selektor klasy zaczyna się od kropki.",
      },
      {
        pytanie:
          "Który selektor wybierze wyłącznie obrazy umieszczone wewnątrz akapitów?",
        odpowiedzi: ["`p.img`", "`p, img`", "`p img`", "`img p`"],
        poprawna: 2,
        wyjasnienie:
          "Spacja to selektor potomka: `img` wewnątrz `p`. Przecinek grupuje dwa niezależne selektory.",
      },
      {
        pytanie: "Selektor `div > p` wybiera:",
        odpowiedzi: [
          "akapity będące bezpośrednimi dziećmi elementu `div`",
          "elementy `div` wewnątrz akapitów",
          "wszystkie akapity wewnątrz `div` na dowolnym poziomie",
          "pierwszy akapit po elemencie `div`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`>` to selektor dziecka — tylko jeden poziom zagnieżdżenia.",
      },
      {
        pytanie:
          "Który zapis ustawi kolor żółty dla nieodwiedzonych odnośników i zielony dla odwiedzonych?",
        odpowiedzi: [
          "`a:link { color: green; } a:visited { color: yellow; }`",
          "`a:link { color: yellow; } a:visited { color: green; }`",
          "`a:visited { color: yellow; } a:active { color: green; }`",
          "`a:hover { color: yellow; } a:visited { color: green; }`",
        ],
        poprawna: 1,
        wyjasnienie: "`:link` to link nieodwiedzony, `:visited` — odwiedzony.",
      },
      {
        pytanie:
          "Która pseudoklasa opisuje stan elementu, nad którym znajduje się kursor myszy?",
        odpowiedzi: ["`:active`", "`:focus`", "`:hover`", "`:visited`"],
        poprawna: 2,
        wyjasnienie:
          "`:hover` działa przy najechaniu kursorem. `:active` — w chwili kliknięcia, `:focus` — gdy pole jest aktywne.",
      },
      {
        pytanie: "Zapis `tr:nth-child(even)` wybierze:",
        odpowiedzi: [
          "pierwszy wiersz tabeli",
          "wszystkie wiersze poza pierwszym",
          "nieparzyste wiersze tabeli",
          "parzyste wiersze tabeli",
        ],
        poprawna: 3,
        wyjasnienie:
          "`even` oznacza elementy parzyste (2, 4, 6…), `odd` — nieparzyste.",
      },
      {
        pytanie:
          "Aby powiększyć pierwszą literę każdego akapitu, należy użyć selektora:",
        odpowiedzi: [
          "`p:first-child`",
          "`p::first-line`",
          "`p:first`",
          "`p::first-letter`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Pseudoelement `::first-letter` wybiera pierwszą literę. `:first-child` to pierwszy element w rodzicu.",
      },
      {
        pytanie: "Która właściwość CSS określa margines wewnętrzny elementu?",
        odpowiedzi: ["`padding`", "`border-spacing`", "`spacing`", "`margin`"],
        poprawna: 0,
        wyjasnienie:
          "`padding` to odstęp między treścią a ramką. `margin` to margines zewnętrzny.",
      },
      {
        pytanie:
          "Element ma styl `margin: 5px 10px 15px 20px;`. Ile wynosi jego lewy margines?",
        odpowiedzi: ["10px", "15px", "20px", "5px"],
        poprawna: 2,
        wyjasnienie:
          "Cztery wartości to kolejno: góra, prawo, dół, lewo (zgodnie z ruchem wskazówek zegara).",
      },
      {
        pytanie: "Zapis `padding: 10px 30px;` oznacza:",
        odpowiedzi: [
          "10px po lewej i prawej, 30px u góry i u dołu",
          "10px u góry i u dołu, 30px po lewej i po prawej",
          "10px po lewej, 30px po prawej",
          "10px u góry, 30px u dołu",
        ],
        poprawna: 1,
        wyjasnienie:
          "Dwie wartości: pierwsza dla góry i dołu, druga dla lewej i prawej strony.",
      },
      {
        pytanie:
          "Element ma `width: 200px; padding: 10px; border: 5px solid;` i domyślny `box-sizing`. Jaka jest jego całkowita szerokość?",
        odpowiedzi: ["200px", "230px", "215px", "210px"],
        poprawna: 1,
        wyjasnienie:
          "200 + 2·10 (padding) + 2·5 (border) = 230px. Przy `box-sizing: border-box` byłoby 200px.",
      },
      {
        pytanie: "Kolor `rgb(255, 128, 16)` zapisany szesnastkowo to:",
        odpowiedzi: ["`#FF0F10`", "`#FF8011`", "`#008010`", "`#FF8010`"],
        poprawna: 3,
        wyjasnienie: "255 = FF, 128 = 80, 16 = 10.",
      },
      {
        pytanie: "Kolor `#00FF00` to:",
        odpowiedzi: ["niebieski", "żółty", "zielony", "czerwony"],
        poprawna: 2,
        wyjasnienie:
          "Składowe to RR GG BB. Tylko G (zielony) ma maksymalną wartość FF.",
      },
      {
        pytanie: "Czwarty parametr w zapisie `rgba(0, 0, 255, 0.5)` określa:",
        odpowiedzi: [
          "stopień krycia (przezroczystość)",
          "grubość ramki",
          "jasność koloru",
          "nasycenie koloru",
        ],
        poprawna: 0,
        wyjasnienie:
          "Ostatnia wartość to kanał alfa: 0 — całkowicie przezroczysty, 1 — pełne krycie.",
      },
      {
        pytanie: "Która właściwość określa krój czcionki?",
        odpowiedzi: [
          "`font-type`",
          "`font-style`",
          "`font-weight`",
          "`font-family`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`font-family` to krój (np. Arial). `font-style` to kursywa, `font-weight` — grubość.",
      },
      {
        pytanie:
          "Która właściwość pozwala rozstrzelić tekst, czyli zwiększyć odstępy między literami?",
        odpowiedzi: [
          "`letter-spacing`",
          "`word-spacing`",
          "`text-indent`",
          "`line-height`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`letter-spacing` to odstęp między literami, `word-spacing` — między wyrazami.",
      },
      {
        pytanie: "Jak usunąć podkreślenie odnośników?",
        odpowiedzi: [
          "`a { text-style: none; }`",
          "`a { underline: none; }`",
          "`a { text-decoration: none; }`",
          "`a { font-decoration: none; }`",
        ],
        poprawna: 2,
        wyjasnienie: "Podkreślenie linków kontroluje `text-decoration`.",
      },
      {
        pytanie: "Zapis `text-transform: uppercase;` spowoduje, że tekst:",
        odpowiedzi: [
          "zostanie pogrubiony",
          "zostanie wyświetlony wielkimi literami",
          "zostanie przesunięty w górę",
          "będzie miał wielką tylko pierwszą literę",
        ],
        poprawna: 1,
        wyjasnienie:
          "`uppercase` zamienia na wielkie litery, `lowercase` na małe, `capitalize` daje wielką pierwszą literę każdego wyrazu.",
      },
      {
        pytanie: "Która właściwość ustawia wcięcie pierwszego wiersza akapitu?",
        odpowiedzi: [
          "`text-align`",
          "`text-indent`",
          "`margin-first`",
          "`padding-left`",
        ],
        poprawna: 1,
        wyjasnienie:
          "`text-indent` dotyczy tylko pierwszej linii. `padding-left` przesuwa cały tekst.",
      },
      {
        pytanie: "Jednostka `em` jest jednostką:",
        odpowiedzi: [
          "bezwzględną, stosowaną tylko przy druku",
          "względną, zależną od szerokości okna przeglądarki",
          "bezwzględną, równą 1 pikselowi",
          "względną, zależną od rozmiaru czcionki elementu nadrzędnego",
        ],
        poprawna: 3,
        wyjasnienie:
          "`em` zależy od czcionki rodzica, `rem` — od elementu `html`, `vw` — od szerokości okna.",
      },
      {
        pytanie: "Która właściwość zaokrągla narożniki elementu?",
        odpowiedzi: [
          "`border-radius`",
          "`border-round`",
          "`corner-radius`",
          "`border-style`",
        ],
        poprawna: 0,
        wyjasnienie: "Np. `border-radius: 10px`, a `50%` daje koło.",
      },
      {
        pytanie: "Zapis `box-shadow: 10px 10px 5px gray;` dodaje:",
        odpowiedzi: [
          "szarą ramkę grubości 10px",
          "szary margines zewnętrzny",
          "szary cień przesunięty o 10px w prawo i w dół, rozmyty na 5px",
          "cień tekstu",
        ],
        poprawna: 2,
        wyjasnienie:
          "Wartości to przesunięcie X, przesunięcie Y, rozmycie i kolor. Cień tekstu to `text-shadow`.",
      },
      {
        pytanie:
          "Który zapis sprawi, że tło strony nie będzie się przesuwać podczas przewijania?",
        odpowiedzi: [
          "`background-size: fixed;`",
          "`background-position: static;`",
          "`background-repeat: fixed;`",
          "`background-attachment: fixed;`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`background-attachment: fixed` przytwierdza tło do okna przeglądarki.",
      },
      {
        pytanie:
          "Który zapis spowoduje powtarzanie obrazu tła tylko w poziomie?",
        odpowiedzi: [
          "`background-position: x;`",
          "`background-repeat: repeat-x;`",
          "`background-repeat: no-repeat;`",
          "`background-repeat: repeat-y;`",
        ],
        poprawna: 1,
        wyjasnienie: "`repeat-x` — poziomo, `repeat-y` — pionowo.",
      },
      {
        pytanie: "Czym różni się `display: none` od `visibility: hidden`?",
        odpowiedzi: [
          "`display: none` ukrywa tylko tekst, a obrazy zostawia",
          "`visibility: hidden` usuwa element z kodu HTML",
          "`display: none` usuwa element z układu, a `visibility: hidden` ukrywa go, zostawiając puste miejsce",
          "niczym, oba działają identycznie",
        ],
        poprawna: 2,
        wyjasnienie:
          "Przy `display: none` element nie zajmuje miejsca, przy `visibility: hidden` — zajmuje.",
      },
      {
        pytanie:
          "Która właściwość sprawia, że element nie będzie opływany przez wcześniejsze elementy pływające?",
        odpowiedzi: [
          "`clear: both;`",
          "`overflow: hidden;`",
          "`float: none;`",
          "`display: block;`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`clear` przesuwa element pod elementy z `float`. Typowo stosuje się go w stopce.",
      },
      {
        pytanie: "Element z `position: fixed` jest pozycjonowany względem:",
        odpowiedzi: [
          "okna przeglądarki i nie przesuwa się przy przewijaniu",
          "swojego normalnego położenia",
          "poprzedniego elementu",
          "najbliższego elementu nadrzędnego",
        ],
        poprawna: 0,
        wyjasnienie:
          "`fixed` przytwierdza element do okna. Względem normalnego położenia działa `relative`.",
      },
      {
        pytanie:
          "Która właściwość określa, który z nakładających się elementów będzie na wierzchu?",
        odpowiedzi: ["`layer`", "`z-index`", "`order`", "`position`"],
        poprawna: 1,
        wyjasnienie:
          "Większy `z-index` oznacza element wyżej. Działa dla elementów pozycjonowanych.",
      },
      {
        pytanie:
          "Kontener ma `display: flex`. Która właściwość wyśrodkuje jego elementy w poziomie (oś główna, `flex-direction: row`)?",
        odpowiedzi: [
          "`align-items: center;`",
          "`text-align: middle;`",
          "`justify-content: center;`",
          "`flex-align: center;`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`justify-content` działa wzdłuż osi głównej, `align-items` — w osi poprzecznej.",
      },
      {
        pytanie:
          "Która właściwość łączy obramowania sąsiednich komórek tabeli w pojedynczą linię?",
        odpowiedzi: [
          "`border-style: single;`",
          "`table-border: merge;`",
          "`border-spacing: 0;`",
          "`border-collapse: collapse;`",
        ],
        poprawna: 3,
        wyjasnienie: "`border-collapse: collapse` scala ramki komórek.",
      },
      {
        pytanie:
          "Które formatowanie wyświetli punktory listy w kształcie kwadratu?",
        odpowiedzi: [
          "`list-style-image: square;`",
          "`list-style-type: disc;`",
          "`list-style-type: circle;`",
          "`list-style-type: square;`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`square` to kwadrat, `circle` — okrąg, `disc` — wypełnione kółko (domyślne).",
      },
      {
        pytanie:
          "Reguła `@media (max-width: 600px) { … }` zostanie zastosowana, gdy:",
        odpowiedzi: [
          "szerokość okna wynosi co najwyżej 600px",
          "szerokość okna wynosi co najmniej 600px",
          "strona jest drukowana",
          "obraz ma szerokość 600px",
        ],
        poprawna: 0,
        wyjasnienie:
          "`max-width` oznacza „do”, więc styl zadziała na wąskich ekranach, np. telefonach.",
      },
      {
        pytanie:
          "Który zapis zmieni kursor na „rączkę” po najechaniu na obraz?",
        odpowiedzi: [
          "`img:hover { cursor: hand-click; }`",
          "`img:hover { cursor: pointer; }`",
          "`img { mouse: pointer; }`",
          "`img:active { pointer: hand; }`",
        ],
        poprawna: 1,
        wyjasnienie:
          "Właściwość `cursor` z wartością `pointer` pokazuje rączkę.",
      },
    ],
  },
  {
    id: "js",
    nazwa: "JavaScript",
    opis: "Język skryptowy działający w przeglądarce: zmienne, warunki, pętle, funkcje, tablice, DOM i zdarzenia. Wszystko, czego potrzebujesz do skryptów z części praktycznej INF.03 i pytań testowych.",
    dzialy: [
      {
        id: "js-podstawy",
        tytul: "Podstawy języka",
        tematy: [
          {
            id: "js-wstep",
            tytul: "Czym jest JavaScript i gdzie go umieścić",
            skrot:
              "JavaScript działa w przeglądarce; kod wstawiamy w znaczniku `<script>` lub w osobnym pliku `.js`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**JavaScript** (JS) to język skryptowy wykonywany **po stronie klienta**, czyli w przeglądarce użytkownika. Dzięki niemu strona reaguje na kliknięcia, liczy wyniki, sprawdza formularze i zmienia swój wygląd bez przeładowania.",
              },
              {
                typ: "p",
                tekst:
                  "Nie potrzebujesz serwera, żeby uruchomić JS. Wystarczy otworzyć plik HTML w przeglądarce. To odróżnia go od PHP, który działa na serwerze.",
              },
              {
                typ: "h",
                tekst: "Sposób 1: skrypt wewnątrz dokumentu",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n  <meta charset="UTF-8">\n  <title>Pierwszy skrypt</title>\n</head>\n<body>\n  <p id="info"></p>\n  <script>\n    document.getElementById("info").innerHTML = "Witaj na stronie!";\n  </script>\n</body>\n</html>',
              },
              {
                typ: "p",
                tekst:
                  "Na ekranie pojawi się akapit z tekstem **Witaj na stronie!**. Skrypt stoi na końcu `<body>`, więc akapit `#info` już istnieje, gdy kod się wykonuje.",
              },
              {
                typ: "h",
                tekst: "Sposób 2: zewnętrzny plik .js",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<head>\n  <meta charset="UTF-8">\n  <title>Kalkulator</title>\n  <script src="skrypt.js" defer></script>\n</head>',
              },
              {
                typ: "lista",
                elementy: [
                  "Atrybut `src` wskazuje plik ze skryptem. Znacznik `<script>` z `src` zostawiamy pusty w środku.",
                  "Atrybut `defer` każe wykonać skrypt dopiero po wczytaniu całego HTML. Dzięki temu `getElementById` znajdzie elementy.",
                  "Bez `defer` skrypt w `<head>` wykona się za wcześnie i elementy będą równe `null`.",
                  'Najprostsze rozwiązanie na egzaminie: `<script src="skrypt.js"></script>` tuż przed `</body>`.',
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Najczęstszy błąd: skrypt w `<head>` bez `defer`, który od razu szuka elementu. Wynik to błąd `Cannot set properties of null`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Arkusz praktyczny zwykle każe zapisać skrypt w pliku `skrypt.js` albo wewnątrz strony. Czytaj dokładnie polecenie. Komentarz w JS zapisujemy jako `// tekst` lub `/* tekst */`. Na teście pada też pytanie, że JavaScript wykonywany jest **po stronie klienta**.",
              },
            ],
          },
          {
            id: "js-wyswietlanie",
            tytul: "Wyświetlanie danych",
            skrot:
              "`console.log`, `alert`, `document.write`, `innerHTML` i `textContent` - różne sposoby pokazania wyniku.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "JavaScript może pokazać wynik na kilka sposobów. Na egzaminie praktycznym prawie zawsze wpisujemy wynik do elementu strony przez `innerHTML`.",
              },
              {
                typ: "tabela",
                naglowki: ["Instrukcja", "Gdzie pojawia się wynik"],
                wiersze: [
                  [
                    "`console.log(x)`",
                    "W konsoli przeglądarki (F12, zakładka Console). Służy do testowania.",
                  ],
                  [
                    '`alert("tekst")`',
                    "W okienku dialogowym z przyciskiem OK.",
                  ],
                  [
                    '`document.write("tekst")`',
                    "Dopisuje tekst do dokumentu w miejscu skryptu. Po wczytaniu strony nadpisuje całą stronę.",
                  ],
                  [
                    '`element.innerHTML = "..."`',
                    "Wstawia treść do elementu. Znaczniki HTML są interpretowane.",
                  ],
                  [
                    '`element.textContent = "..."`',
                    "Wstawia czysty tekst. Znaczniki pokażą się jako zwykłe znaki.",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let imie = "Ola";\nconsole.log("Imię:", imie);\nalert("Cześć " + imie);\ndocument.getElementById("wynik").innerHTML = "<b>Cześć</b> " + imie;\ndocument.getElementById("opis").textContent = "<b>Cześć</b>";',
              },
              {
                typ: "p",
                tekst:
                  "W konsoli zobaczysz `Imię: Ola`. Pojawi się okienko z tekstem **Cześć Ola**. W elemencie `#wynik` słowo **Cześć** będzie pogrubione, a w `#opis` zobaczysz dosłownie `<b>Cześć</b>`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Nie używaj `document.write` w funkcji wywołanej kliknięciem. Usunie całą zawartość strony.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe pytanie testowe: która metoda wyświetla komunikat w konsoli przeglądarki? Odpowiedź: `console.log()`.",
              },
            ],
          },
          {
            id: "js-zmienne",
            tytul: "Zmienne: var, let, const",
            skrot:
              "Zmienne deklarujemy słowami `let`, `const` lub starszym `var`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Zmienna to nazwane miejsce w pamięci na wartość. W JS nie podajemy typu - typ wynika z wartości.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let licznik = 0;\nlicznik = licznik + 1;\nconst VAT = 0.23;\nvar stara = "działa, ale lepiej używać let";',
              },
              {
                typ: "tabela",
                naglowki: ["Słowo", "Zmiana wartości", "Zasięg", "Uwagi"],
                wiersze: [
                  [
                    "`let`",
                    "tak",
                    "blokowy `{ }`",
                    "Nowoczesny wybór dla zmiennych.",
                  ],
                  [
                    "`const`",
                    "nie",
                    "blokowy `{ }`",
                    "Stała. Trzeba ją od razu zainicjować.",
                  ],
                  [
                    "`var`",
                    "tak",
                    "funkcyjny",
                    "Stary sposób. Ma hoisting i ignoruje bloki.",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Zasady nazewnictwa",
              },
              {
                typ: "lista",
                elementy: [
                  "Nazwa zaczyna się od litery, `_` lub `$`. Nie może zaczynać się cyfrą.",
                  "Wielkość liter ma znaczenie: `wiek` i `Wiek` to dwie różne zmienne.",
                  "Nie można użyć słów kluczowych, np. `let`, `if`, `function`.",
                  "Zwyczajowo stosujemy camelCase: `cenaBrutto`, `liczbaOsob`.",
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "if (true) {\n  let a = 1;\n  var b = 2;\n}\nconsole.log(b);\nconsole.log(a);",
              },
              {
                typ: "p",
                tekst:
                  "Pierwszy `console.log` wypisze `2`, bo `var` nie zna zasięgu bloku. Drugi zgłosi błąd `a is not defined`, bo `let` istnieje tylko wewnątrz klamer.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Próba zmiany `const` kończy się błędem `Assignment to constant variable`.",
              },
            ],
          },
          {
            id: "js-typy",
            tytul: "Typy danych i typeof",
            skrot:
              "Podstawowe typy: number, string, boolean, undefined, null, object; operator `typeof` zwraca nazwę typu.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "JavaScript jest językiem **dynamicznie typowanym**. Ta sama zmienna może raz przechowywać liczbę, a później tekst.",
              },
              {
                typ: "tabela",
                naglowki: ["Typ", "Przykład", "`typeof` zwraca"],
                wiersze: [
                  ["liczba", "`42`, `3.14`, `NaN`", '`"number"`'],
                  ["napis", "`\"Ala\"`, `'kot'`, `` `tekst` ``", '`"string"`'],
                  ["logiczny", "`true`, `false`", '`"boolean"`'],
                  ["niezdefiniowany", "`undefined`", '`"undefined"`'],
                  ["pusta wartość", "`null`", '`"object"` (znany błąd języka)'],
                  ["obiekt, tablica", "`{a: 1}`, `[1, 2]`", '`"object"`'],
                  ["funkcja", "`function() {}`", '`"function"`'],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let x;\nconsole.log(typeof x);\nconsole.log(typeof 5);\nconsole.log(typeof "5");\nconsole.log(typeof [1, 2, 3]);\nconsole.log(typeof true);',
              },
              {
                typ: "p",
                tekst:
                  "Konsola pokaże kolejno: `undefined`, `number`, `string`, `object`, `boolean`.",
              },
              {
                typ: "lista",
                elementy: [
                  "W JS jest tylko jeden typ liczbowy `number` - liczby całkowite i rzeczywiste to ten sam typ.",
                  '`NaN` (Not a Number) to wynik złej operacji, np. `"abc" * 2`. Jego typ to nadal `number`.',
                  "Zmienna zadeklarowana bez wartości ma wartość `undefined`.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  'Na teście często pytają, co zwróci `typeof` dla tablicy. Odpowiedź: `"object"`.',
              },
            ],
          },
          {
            id: "js-operatory",
            tytul: "Operatory",
            skrot:
              "Arytmetyczne, przypisania, porównania (`==` kontra `===`), logiczne i łączenie napisów.",
            tresc: [
              {
                typ: "h",
                tekst: "Arytmetyczne i przypisania",
              },
              {
                typ: "tabela",
                naglowki: ["Operator", "Znaczenie", "Przykład", "Wynik"],
                wiersze: [
                  [
                    "`+ - * /`",
                    "dodawanie, odejmowanie, mnożenie, dzielenie",
                    "`7 / 2`",
                    "`3.5`",
                  ],
                  ["`%`", "reszta z dzielenia (modulo)", "`7 % 2`", "`1`"],
                  ["`**`", "potęgowanie", "`2 ** 3`", "`8`"],
                  [
                    "`++` / `--`",
                    "zwiększenie / zmniejszenie o 1",
                    "`x++`",
                    "x większe o 1",
                  ],
                  [
                    "`+=`, `-=`, `*=`, `/=`",
                    "skrócone przypisanie",
                    "`x += 5`",
                    "`x = x + 5`",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "`x++` (postinkrementacja) najpierw zwraca starą wartość, potem zwiększa. `++x` (preinkrementacja) najpierw zwiększa.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "let a = 5;\nlet b = a++;\nlet c = ++a;",
              },
              {
                typ: "p",
                tekst:
                  "Po wykonaniu: `b` ma wartość `5`, `c` ma `7`, a `a` ma `7`.",
              },
              {
                typ: "h",
                tekst: "Porównania",
              },
              {
                typ: "tabela",
                naglowki: ["Operator", "Znaczenie", "Przykład", "Wynik"],
                wiersze: [
                  [
                    "`==`",
                    "równe (porównuje wartość, zamienia typy)",
                    '`5 == "5"`',
                    "`true`",
                  ],
                  [
                    "`===`",
                    "identyczne (wartość i typ)",
                    '`5 === "5"`',
                    "`false`",
                  ],
                  ["`!=`", "różne (wartość)", '`5 != "5"`', "`false`"],
                  [
                    "`!==`",
                    "nieidentyczne (wartość lub typ)",
                    '`5 !== "5"`',
                    "`true`",
                  ],
                  ["`< > <= >=`", "mniejsze, większe…", "`3 >= 3`", "`true`"],
                ],
              },
              {
                typ: "h",
                tekst: "Logiczne",
              },
              {
                typ: "lista",
                elementy: [
                  "`&&` - i (AND): prawda, gdy oba warunki prawdziwe.",
                  "`||` - lub (OR): prawda, gdy choć jeden warunek prawdziwy.",
                  "`!` - zaprzeczenie (NOT).",
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let liczba = -150;\nif (liczba >= -200 && liczba < -100) {\n  console.log("w przedziale");\n}',
              },
              {
                typ: "h",
                tekst: "Łączenie napisów",
              },
              {
                typ: "p",
                tekst:
                  "Operator `+` z napisem skleja tekst. To pułapka przy danych z formularza.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'console.log("5" + 2);\nconsole.log("5" - 2);\nconsole.log(2 + 3 + "px");\nconsole.log(`Suma: ${2 + 3}`);',
              },
              {
                typ: "p",
                tekst:
                  "Konsola pokaże: `52`, `3`, `5px`, `Suma: 5`. Odejmowanie zamienia napis na liczbę, a dodawanie skleja teksty.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania testowe: `x++` daje ten sam efekt co `x += 1`; operator `%` zwraca resztę z dzielenia; `===` sprawdza też typ. Liczba parzysta to `n % 2 == 0`.",
              },
            ],
          },
          {
            id: "js-konwersja",
            tytul: "Konwersja typów",
            skrot:
              "`parseInt`, `parseFloat`, `Number`, `String`, `toFixed`, `isNaN` - zamiana tekstu na liczbę i formatowanie.",
            tresc: [
              {
                typ: "p",
                tekst:
                  'Wartość pola `<input>` zawsze jest **napisem**, nawet jeśli `type="number"`. Przed dodawaniem trzeba ją zamienić na liczbę.',
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie", "Przykład", "Wynik"],
                wiersze: [
                  [
                    "`parseInt(t)`",
                    "liczba całkowita z początku tekstu",
                    '`parseInt("12.7zł")`',
                    "`12`",
                  ],
                  [
                    "`parseFloat(t)`",
                    "liczba z częścią ułamkową",
                    '`parseFloat("12.7zł")`',
                    "`12.7`",
                  ],
                  [
                    "`Number(t)`",
                    "cały tekst musi być liczbą",
                    '`Number("12zł")`',
                    "`NaN`",
                  ],
                  [
                    "`String(x)`, `x.toString()`",
                    "liczba na napis",
                    "`String(5)`",
                    '`"5"`',
                  ],
                  [
                    "`x.toFixed(n)`",
                    "zaokrąglenie do n miejsc, wynik to napis",
                    "`(2.456).toFixed(2)`",
                    '`"2.46"`',
                  ],
                  [
                    "`isNaN(x)`",
                    "sprawdza, czy to NIE jest liczba",
                    '`isNaN("abc")`',
                    "`true`",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let a = document.getElementById("a").value;\nlet b = document.getElementById("b").value;\nlet zle = a + b;\nlet dobrze = Number(a) + Number(b);',
              },
              {
                typ: "p",
                tekst:
                  'Gdy użytkownik wpisze `2` i `3`, zmienna `zle` będzie równa `"23"`, a `dobrze` będzie równa `5`.',
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let cena = parseFloat(document.getElementById("cena").value);\nif (isNaN(cena)) {\n  alert("Podaj liczbę!");\n} else {\n  document.getElementById("wynik").innerHTML = "Brutto: " + (cena * 1.23).toFixed(2) + " zł";\n}',
              },
              {
                typ: "uwaga",
                tekst:
                  "`toFixed` zwraca napis. Jeśli chcesz dalej liczyć, zamień wynik ponownie przez `Number()`.",
              },
              {
                typ: "egzamin",
                tekst:
                  'Pytanie z testu: co zwróci `parseInt("15abc")`? Odpowiedź: `15`. A `Number("15abc")`? Odpowiedź: `NaN`.',
              },
            ],
          },
        ],
      },
      {
        id: "js-sterowanie",
        tytul: "Instrukcje sterujące i funkcje",
        tematy: [
          {
            id: "js-warunki",
            tytul: "Instrukcje warunkowe: if, switch, operator ?:",
            skrot: "Wybór ścieżki działania programu na podstawie warunku.",
            tresc: [
              {
                typ: "h",
                tekst: "if / else if / else",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let punkty = 34;\nlet ocena;\nif (punkty >= 36) {\n  ocena = "zdany";\n} else if (punkty >= 30) {\n  ocena = "prawie";\n} else {\n  ocena = "niezdany";\n}',
              },
              {
                typ: "p",
                tekst:
                  'Warunki sprawdzane są po kolei. Wykonuje się tylko pierwszy prawdziwy blok. Tutaj `ocena` będzie równa `"prawie"`.',
              },
              {
                typ: "h",
                tekst: "switch",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let dzien = 3;\nlet nazwa;\nswitch (dzien) {\n  case 1:\n    nazwa = "poniedziałek";\n    break;\n  case 2:\n    nazwa = "wtorek";\n    break;\n  case 3:\n    nazwa = "środa";\n    break;\n  default:\n    nazwa = "inny dzień";\n}',
              },
              {
                typ: "lista",
                elementy: [
                  "`switch` porównuje wartość ściśle, tak jak `===`.",
                  "`break` kończy `switch`. Bez niego wykonają się też kolejne przypadki.",
                  "`default` działa, gdy żaden `case` nie pasuje.",
                ],
              },
              {
                typ: "h",
                tekst: "Operator trójargumentowy",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let wiek = 17;\nlet status = wiek >= 18 ? "pełnoletni" : "niepełnoletni";',
              },
              {
                typ: "p",
                tekst:
                  'Zapis `warunek ? wartośćGdyPrawda : wartośćGdyFałsz`. Tutaj `status` to `"niepełnoletni"`.',
              },
              {
                typ: "h",
                tekst: "Wartości fałszywe",
              },
              {
                typ: "p",
                tekst:
                  'W warunku jako fałsz traktowane są: `false`, `0`, `""` (pusty napis), `null`, `undefined`, `NaN`. Dlatego `if (pole.value)` sprawdza, czy pole nie jest puste.',
              },
              {
                typ: "uwaga",
                tekst:
                  "W warunku używaj `==` lub `===`, a nie `=`. Zapis `if (x = 5)` przypisuje wartość i zawsze jest prawdziwy.",
              },
            ],
          },
          {
            id: "js-petle",
            tytul: "Pętle: for, while, do…while, for…of",
            skrot:
              "Powtarzanie instrukcji, przerwanie pętli `break` i pominięcie kroku `continue`.",
            tresc: [
              {
                typ: "h",
                tekst: "for - gdy znamy liczbę powtórzeń",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let tekst = "";\nfor (let i = 1; i <= 5; i++) {\n  tekst += i + " ";\n}\ndocument.getElementById("wynik").innerHTML = tekst;',
              },
              {
                typ: "p",
                tekst:
                  "W elemencie `#wynik` pojawi się `1 2 3 4 5`. Pętla ma trzy części: inicjalizację `let i = 1`, warunek `i <= 5` i krok `i++`.",
              },
              {
                typ: "h",
                tekst: "while i do…while",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let i = 10;\nwhile (i < 5) {\n  console.log("while", i);\n  i++;\n}\ndo {\n  console.log("do-while", i);\n  i++;\n} while (i < 5);',
              },
              {
                typ: "lista",
                elementy: [
                  "`while` sprawdza warunek **przed** obrotem. Może nie wykonać się ani razu.",
                  "`do…while` sprawdza warunek **po** obrocie. Zawsze wykona się co najmniej raz.",
                  "W przykładzie konsola pokaże tylko `do-while 10`.",
                ],
              },
              {
                typ: "h",
                tekst: "for…of i for…in",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let owoce = ["jabłko", "gruszka", "śliwka"];\nfor (let owoc of owoce) {\n  console.log(owoc);\n}\nfor (let indeks in owoce) {\n  console.log(indeks);\n}',
              },
              {
                typ: "p",
                tekst:
                  "`for…of` daje kolejne **wartości** (jabłko, gruszka, śliwka). `for…in` daje **klucze**, czyli indeksy 0, 1, 2.",
              },
              {
                typ: "h",
                tekst: "break i continue",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "for (let i = 1; i <= 10; i++) {\n  if (i % 2 == 0) continue;\n  if (i > 7) break;\n  console.log(i);\n}",
              },
              {
                typ: "p",
                tekst:
                  "Konsola pokaże `1`, `3`, `5`, `7`. `continue` pomija liczby parzyste, a `break` kończy pętlę przy 9.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe zadanie testowe: ile razy wykona się pętla `for (i = 0; i <= 10; i += 2)`? Odpowiedź: 6 razy (0, 2, 4, 6, 8, 10). Licz dokładnie, czy warunek ma `<` czy `<=`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Pętla bez zmiany licznika (np. brak `i++` w `while`) jest nieskończona i zawiesza kartę przeglądarki.",
              },
            ],
          },
          {
            id: "js-funkcje",
            tytul: "Funkcje",
            skrot:
              "Deklaracja funkcji, parametry, `return`, funkcje strzałkowe i zasięg zmiennych.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Funkcja to nazwany blok kodu, który wywołujemy wiele razy. Na egzaminie praktycznym funkcję podpinamy pod kliknięcie przycisku.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "function pole(a, b) {\n  return a * b;\n}\nlet wynik = pole(4, 5);",
              },
              {
                typ: "lista",
                elementy: [
                  "`function` - słowo kluczowe, `pole` - nazwa, `a, b` - parametry.",
                  "`return` zwraca wartość i kończy funkcję. Bez `return` funkcja zwraca `undefined`.",
                  "Wywołanie `pole(4, 5)` przekazuje argumenty. `wynik` będzie równy `20`.",
                ],
              },
              {
                typ: "h",
                tekst: "Wartości domyślne parametrów",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function powitanie(imie = "Gościu") {\n  return "Witaj, " + imie + "!";\n}\nconsole.log(powitanie());\nconsole.log(powitanie("Kasia"));',
              },
              {
                typ: "p",
                tekst: "Konsola pokaże `Witaj, Gościu!` oraz `Witaj, Kasia!`.",
              },
              {
                typ: "h",
                tekst: "Funkcja jako wyrażenie i funkcja strzałkowa",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "const kwadrat = function (x) {\n  return x * x;\n};\nconst szescian = (x) => x * x * x;\nconst suma = (a, b) => {\n  let s = a + b;\n  return s;\n};",
              },
              {
                typ: "p",
                tekst:
                  "Funkcja strzałkowa `=>` to krótszy zapis. Gdy ciało ma jedną instrukcję bez klamer, wynik jest zwracany automatycznie.",
              },
              {
                typ: "h",
                tekst: "Zasięg zmiennych",
              },
              {
                typ: "p",
                tekst:
                  "Zmienna zadeklarowana w funkcji jest **lokalna** - nie istnieje poza nią. Zmienna zadeklarowana poza funkcjami jest **globalna** i widać ją wszędzie.",
              },
              {
                typ: "egzamin",
                tekst:
                  'W arkuszu pojawia się zdanie: „skrypt wywoływany jest przyciskiem OBLICZ”. Robisz funkcję, np. `function oblicz() { … }`, i dodajesz przyciskowi `onclick="oblicz()"`.',
              },
            ],
          },
        ],
      },
      {
        id: "js-dane",
        tytul: "Tablice, napisy i obiekty wbudowane",
        tematy: [
          {
            id: "js-tablice",
            tytul: "Tablice - podstawy",
            skrot:
              "Tworzenie tablicy, indeksy od 0, `length`, dodawanie i usuwanie elementów.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Tablica przechowuje wiele wartości pod jedną nazwą. Elementy numerujemy od **0**.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let miasta = ["Kraków", "Gdańsk", "Poznań"];\nlet pusta = [];\nlet liczby = new Array(3, 7, 9);\nconsole.log(miasta[0]);\nconsole.log(miasta.length);\nconsole.log(miasta[miasta.length - 1]);',
              },
              {
                typ: "p",
                tekst:
                  "Konsola pokaże `Kraków`, `3` oraz `Poznań`. Ostatni element ma indeks `length - 1`.",
              },
              {
                typ: "tabela",
                naglowki: ["Metoda", "Działanie", "Zwraca"],
                wiersze: [
                  ["`push(x)`", "dodaje na koniec", "nową długość"],
                  ["`pop()`", "usuwa ostatni", "usunięty element"],
                  ["`unshift(x)`", "dodaje na początek", "nową długość"],
                  ["`shift()`", "usuwa pierwszy", "usunięty element"],
                  ["`indexOf(x)`", "szuka elementu", "indeks lub `-1`"],
                  ["`includes(x)`", "sprawdza, czy jest", "`true` / `false`"],
                  ["`join(sep)`", "łączy w napis", "napis"],
                  ["`reverse()`", "odwraca kolejność", "tablicę"],
                  [
                    "`slice(a, b)`",
                    "kopiuje fragment od a do b-1",
                    "nową tablicę",
                  ],
                  [
                    "`splice(i, n)`",
                    "usuwa n elementów od indeksu i",
                    "usunięte elementy",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let kolory = ["red", "green"];\nkolory.push("blue");\nkolory.unshift("black");\nkolory.pop();\ndocument.getElementById("wynik").innerHTML = kolory.join(", ");',
              },
              {
                typ: "p",
                tekst:
                  "Kolejne stany: `[red, green]` → `[red, green, blue]` → `[black, red, green, blue]` → `[black, red, green]`. Na stronie pojawi się `black, red, green`.",
              },
              {
                typ: "h",
                tekst: "Przejście po tablicy",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "let oceny = [5, 3, 4, 6];\nlet suma = 0;\nfor (let i = 0; i < oceny.length; i++) {\n  suma += oceny[i];\n}\nlet srednia = suma / oceny.length;",
              },
              {
                typ: "p",
                tekst: "Zmienna `srednia` będzie równa `4.5`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pamiętaj: indeks pierwszego elementu to 0. Pytanie „co wypisze `tab[2]`” dotyczy **trzeciego** elementu.",
              },
            ],
          },
          {
            id: "js-tablice-metody",
            tytul: "Sortowanie i metody forEach, map, filter",
            skrot:
              "`sort()` z funkcją porównującą oraz metody przetwarzające tablice.",
            tresc: [
              {
                typ: "h",
                tekst: "sort()",
              },
              {
                typ: "p",
                tekst:
                  "Domyślnie `sort()` porównuje elementy **jako napisy**. Dla liczb daje to złą kolejność.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "let liczby = [10, 2, 33, 4];\nliczby.sort();\nconsole.log(liczby);\nliczby.sort((a, b) => a - b);\nconsole.log(liczby);\nliczby.sort((a, b) => b - a);\nconsole.log(liczby);",
              },
              {
                typ: "p",
                tekst:
                  'Kolejno zobaczysz: `[10, 2, 33, 4]` (porządek tekstowy: "10" < "2"), potem rosnąco `[2, 4, 10, 33]`, potem malejąco `[33, 10, 4, 2]`.',
              },
              {
                typ: "lista",
                elementy: [
                  "Funkcja porównująca zwraca liczbę ujemną, gdy `a` ma być przed `b`, dodatnią, gdy po `b`, i 0, gdy są równe.",
                  "`sort()` zmienia oryginalną tablicę.",
                  "Napisy z polskimi znakami sortujemy przez `tab.sort((a, b) => a.localeCompare(b))`.",
                ],
              },
              {
                typ: "h",
                tekst: "forEach, map, filter",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let ceny = [10, 25, 40];\nceny.forEach(function (c, i) {\n  console.log(i + ": " + c);\n});\nlet brutto = ceny.map(c => c * 1.23);\nlet drogie = ceny.filter(c => c > 20);',
              },
              {
                typ: "tabela",
                naglowki: ["Metoda", "Co robi", "Wynik w przykładzie"],
                wiersze: [
                  [
                    "`forEach(f)`",
                    "wywołuje funkcję dla każdego elementu",
                    "wypisuje `0: 10`, `1: 25`, `2: 40`",
                  ],
                  [
                    "`map(f)`",
                    "tworzy nową tablicę z przekształconych elementów",
                    "`[12.3, 30.75, 49.2]`",
                  ],
                  [
                    "`filter(f)`",
                    "tworzy nową tablicę z elementów spełniających warunek",
                    "`[25, 40]`",
                  ],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Zapamiętaj pułapkę: `[1, 5, 10].sort()` daje `[1, 10, 5]`.",
              },
            ],
          },
          {
            id: "js-napisy",
            tytul: "Napisy (string)",
            skrot:
              "Długość, wielkość liter, wycinanie fragmentów, wyszukiwanie, zamiana i dzielenie napisów.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Napis zapisujemy w cudzysłowach `\"…\"`, apostrofach `'…'` lub w odwróconych apostrofach `` `…` `` (szablon z `${zmienna}`). Znaki w napisie numerujemy od 0, jak w tablicy.",
              },
              {
                typ: "tabela",
                naglowki: [
                  "Metoda / właściwość",
                  'Przykład dla `s = "Programowanie"`',
                  "Wynik",
                ],
                wiersze: [
                  ["`length`", "`s.length`", "`13`"],
                  ["`toUpperCase()`", "`s.toUpperCase()`", '`"PROGRAMOWANIE"`'],
                  ["`toLowerCase()`", "`s.toLowerCase()`", '`"programowanie"`'],
                  ["`charAt(i)` / `s[i]`", "`s.charAt(0)`", '`"P"`'],
                  ["`indexOf(t)`", '`s.indexOf("gram")`', "`3` (brak to `-1`)"],
                  ["`substring(a, b)`", "`s.substring(0, 7)`", '`"Program"`'],
                  ["`slice(a, b)`", "`s.slice(-5)`", '`"wanie"`'],
                  [
                    "`replace(a, b)`",
                    '`s.replace("o", "0")`',
                    '`"Pr0gramowanie"` (tylko pierwsze)',
                  ],
                  [
                    "`replaceAll(a, b)`",
                    '`s.replaceAll("o", "0")`',
                    '`"Pr0gram0wanie"`',
                  ],
                  ["`split(sep)`", '`"a-b-c".split("-")`', '`["a", "b", "c"]`'],
                  ["`trim()`", '`"  ok  ".trim()`', '`"ok"`'],
                  ["`includes(t)`", '`s.includes("gram")`', "`true`"],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let imie = document.getElementById("imie").value.trim();\nlet poprawione = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();\ndocument.getElementById("wynik").innerHTML = `Witaj, ${poprawione}! Liczba liter: ${poprawione.length}`;',
              },
              {
                typ: "p",
                tekst:
                  "Gdy użytkownik wpisze `  aNNA `, na stronie pojawi się `Witaj, Anna! Liczba liter: 4`.",
              },
              {
                typ: "lista",
                elementy: [
                  "`substring(a, b)` bierze znaki od indeksu `a` do `b - 1`.",
                  "Napisy są niezmienne - metody zwracają nowy napis, a oryginał zostaje bez zmian.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: która metoda zamienia wszystkie litery na wielkie? Odpowiedź: `toUpperCase()`.",
              },
            ],
          },
          {
            id: "js-math",
            tytul: "Obiekt Math i liczby losowe",
            skrot:
              "`Math.random`, `floor`, `ceil`, `round`, `max`, `min`, `pow`, `sqrt`, `abs`, `PI`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Zapis", "Działanie", "Przykład → wynik"],
                wiersze: [
                  [
                    "`Math.random()`",
                    "losowa liczba z przedziału [0, 1)",
                    "np. `0.7342…`",
                  ],
                  [
                    "`Math.floor(x)`",
                    "zaokrąglenie w dół",
                    "`Math.floor(4.9)` → `4`",
                  ],
                  [
                    "`Math.ceil(x)`",
                    "zaokrąglenie w górę",
                    "`Math.ceil(4.1)` → `5`",
                  ],
                  [
                    "`Math.round(x)`",
                    "zaokrąglenie matematyczne",
                    "`Math.round(4.5)` → `5`",
                  ],
                  [
                    "`Math.trunc(x)`",
                    "obcięcie części ułamkowej",
                    "`Math.trunc(-4.7)` → `-4`",
                  ],
                  [
                    "`Math.max(…)` / `Math.min(…)`",
                    "największa / najmniejsza",
                    "`Math.max(3, 9, 1)` → `9`",
                  ],
                  [
                    "`Math.pow(a, b)`",
                    "potęga a do b",
                    "`Math.pow(2, 10)` → `1024`",
                  ],
                  [
                    "`Math.sqrt(x)`",
                    "pierwiastek kwadratowy",
                    "`Math.sqrt(49)` → `7`",
                  ],
                  [
                    "`Math.abs(x)`",
                    "wartość bezwzględna",
                    "`Math.abs(-3)` → `3`",
                  ],
                  ["`Math.PI`", "liczba pi", "`3.14159…`"],
                ],
              },
              {
                typ: "h",
                tekst: "Losowanie liczby całkowitej z przedziału",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "function losuj(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nlet kostka = losuj(1, 6);",
              },
              {
                typ: "p",
                tekst:
                  "`Math.random() * 6` daje liczbę od 0 do 5.999…, `Math.floor` obcina ją do 0-5, a `+ 1` przesuwa wynik na 1-6.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let r = 5;\nlet pole = Math.PI * Math.pow(r, 2);\ndocument.getElementById("wynik").innerHTML = "Pole koła: " + pole.toFixed(2);',
              },
              {
                typ: "p",
                tekst: "Na stronie pojawi się `Pole koła: 78.54`.",
              },
              {
                typ: "h",
                tekst: "Największa wartość w tablicy",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "let temp = [12, 18, 9, 21];\nlet max = Math.max(...temp);",
              },
              {
                typ: "egzamin",
                tekst:
                  "Bardzo częste pytanie: jak wylosować liczbę całkowitą 1-10? Poprawnie: `Math.floor(Math.random() * 10) + 1`.",
              },
            ],
          },
          {
            id: "js-date",
            tytul: "Data i czas - obiekt Date",
            skrot:
              "Tworzenie daty `new Date()` i odczyt dnia, miesiąca, roku, godziny.",
            tresc: [
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let teraz = new Date();\nlet dzien = teraz.getDate();\nlet miesiac = teraz.getMonth() + 1;\nlet rok = teraz.getFullYear();\nlet dzienTygodnia = teraz.getDay();\ndocument.getElementById("data").innerHTML = dzien + "." + miesiac + "." + rok;',
              },
              {
                typ: "tabela",
                naglowki: ["Metoda", "Zwraca"],
                wiersze: [
                  ["`getFullYear()`", "rok, np. `2026`"],
                  ["`getMonth()`", "miesiąc **0-11** (styczeń = 0)"],
                  ["`getDate()`", "dzień miesiąca 1-31"],
                  ["`getDay()`", "dzień tygodnia 0-6 (niedziela = 0)"],
                  [
                    "`getHours()`, `getMinutes()`, `getSeconds()`",
                    "godzina, minuty, sekundy",
                  ],
                  ['`toLocaleDateString("pl-PL")`', "data w polskim formacie"],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "let urodziny = new Date(2008, 4, 15);\nlet dzis = new Date();\nlet roznicaMs = dzis - urodziny;\nlet dni = Math.floor(roznicaMs / (1000 * 60 * 60 * 24));",
              },
              {
                typ: "p",
                tekst:
                  "`new Date(2008, 4, 15)` to 15 **maja** 2008, bo miesiące liczymy od 0. Odejmowanie dat daje różnicę w milisekundach.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Najczęstszy błąd: zapominasz o `+ 1` przy `getMonth()` i wyświetlasz zły miesiąc.",
              },
            ],
          },
          {
            id: "js-obiekty",
            tytul: "Obiekty",
            skrot:
              "Obiekt grupuje właściwości i metody: zapis `{ klucz: wartość }`, dostęp przez kropkę.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Obiekt opisuje jedną rzecz za pomocą par **klucz: wartość**. Funkcja zapisana w obiekcie to **metoda**.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let samochod = {\n  marka: "Fiat",\n  model: "Panda",\n  rok: 2019,\n  opis: function () {\n    return this.marka + " " + this.model + " (" + this.rok + ")";\n  }\n};\nconsole.log(samochod.marka);\nconsole.log(samochod["model"]);\nsamochod.kolor = "czerwony";\nconsole.log(samochod.opis());',
              },
              {
                typ: "p",
                tekst:
                  "Konsola pokaże `Fiat`, `Panda` i `Fiat Panda (2019)`. Słowo `this` oznacza bieżący obiekt.",
              },
              {
                typ: "h",
                tekst: "Tablica obiektów",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let uczniowie = [\n  { imie: "Jan", srednia: 4.2 },\n  { imie: "Ewa", srednia: 5.1 }\n];\nlet html = "<ul>";\nfor (let u of uczniowie) {\n  html += "<li>" + u.imie + ": " + u.srednia + "</li>";\n}\nhtml += "</ul>";\ndocument.getElementById("lista").innerHTML = html;',
              },
              {
                typ: "p",
                tekst:
                  "Na stronie pojawi się lista punktowana z pozycjami `Jan: 4.2` i `Ewa: 5.1`.",
              },
              {
                typ: "h",
                tekst: "Klasy",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "class Prostokat {\n  constructor(a, b) {\n    this.a = a;\n    this.b = b;\n  }\n  pole() {\n    return this.a * this.b;\n  }\n}\nlet p = new Prostokat(3, 4);",
              },
              {
                typ: "p",
                tekst:
                  "`p.pole()` zwróci `12`. Słowo `new` tworzy nowy obiekt (instancję) klasy, a `constructor` ustawia jego pola.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Obiekty wbudowane, o które pytają na teście: `Math`, `Date`, `String`, `Array`, `document`, `window`.",
              },
            ],
          },
        ],
      },
      {
        id: "js-dom",
        tytul: "DOM - praca z elementami strony",
        tematy: [
          {
            id: "js-dom-pobieranie",
            tytul: "Pobieranie elementów",
            skrot:
              "`getElementById`, `querySelector`, `querySelectorAll`, `getElementsByClassName`, `getElementsByTagName`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**DOM** (Document Object Model) to drzewo obiektów, które przeglądarka buduje z HTML. JavaScript przez DOM odczytuje i zmienia elementy wyświetlanej strony.",
              },
              {
                typ: "tabela",
                naglowki: ["Metoda", "Co zwraca"],
                wiersze: [
                  [
                    '`document.getElementById("id")`',
                    "jeden element o podanym `id` lub `null`",
                  ],
                  [
                    '`document.querySelector("selektor CSS")`',
                    "**pierwszy** pasujący element",
                  ],
                  [
                    '`document.querySelectorAll("selektor CSS")`',
                    "listę (NodeList) wszystkich pasujących",
                  ],
                  [
                    '`document.getElementsByClassName("klasa")`',
                    "kolekcję elementów z klasą (bez kropki!)",
                  ],
                  [
                    '`document.getElementsByTagName("p")`',
                    "kolekcję elementów danego znacznika",
                  ],
                  [
                    '`document.getElementsByName("nazwa")`',
                    "kolekcję elementów z atrybutem `name`",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let naglowek = document.getElementById("tytul");\nlet pierwszyAkapit = document.querySelector("p");\nlet elementyMenu = document.querySelectorAll("#menu li");\nlet wazne = document.getElementsByClassName("styl1");\nfor (let i = 0; i < wazne.length; i++) {\n  wazne[i].style.fontWeight = "bold";\n}',
              },
              {
                typ: "p",
                tekst:
                  "Pętla pogrubia **wszystkie** elementy z klasą `styl1`. Metody z `Elements` w nazwie zwracają kolekcję, więc trzeba użyć indeksu lub pętli.",
              },
              {
                typ: "uwaga",
                tekst:
                  '`getElementsByClassName("styl1").style.color = "red"` nie zadziała - kolekcja nie ma właściwości `style`. Użyj pętli albo `[0]`.',
              },
              {
                typ: "egzamin",
                tekst:
                  'W `querySelector` piszemy selektory jak w CSS: `"#id"`, `".klasa"`, `"div p"`. W `getElementById` podajemy samą nazwę, bez `#`.',
              },
            ],
          },
          {
            id: "js-dom-formularze",
            tytul: "Odczyt pól formularza",
            skrot:
              "`value` pola tekstowego i listy, `checked` pola wyboru i przycisku opcji.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Na egzaminie skrypt prawie zawsze zaczyna się od odczytania danych z formularza. Każde pole ma inną właściwość.",
              },
              {
                typ: "tabela",
                naglowki: ["Element", "Właściwość", "Typ wyniku"],
                wiersze: [
                  [
                    '`<input type="text">`, `number`, `password`',
                    "`value`",
                    "napis",
                  ],
                  ["`<textarea>`", "`value`", "napis"],
                  ["`<select>`", "`value` (wartość wybranej opcji)", "napis"],
                  [
                    '`<input type="checkbox">`',
                    "`checked`",
                    "`true` / `false`",
                  ],
                  [
                    '`<input type="radio">`',
                    "`checked` każdego przycisku osobno",
                    "`true` / `false`",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<input type="number" id="ilosc">\n<select id="rozmiar">\n  <option value="20">mała</option>\n  <option value="30">średnia</option>\n</select>\n<input type="checkbox" id="dostawa"> dostawa\n<input type="radio" name="platnosc" id="karta" value="karta"> karta\n<input type="radio" name="platnosc" id="gotowka" value="gotowka"> gotówka\n<button onclick="licz()">Oblicz</button>\n<p id="wynik"></p>',
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function licz() {\n  let ilosc = Number(document.getElementById("ilosc").value);\n  let cena = Number(document.getElementById("rozmiar").value);\n  let koszt = ilosc * cena;\n  if (document.getElementById("dostawa").checked) {\n    koszt += 10;\n  }\n  let platnosc = document.getElementById("karta").checked ? "kartą" : "gotówką";\n  document.getElementById("wynik").innerHTML = "Do zapłaty: " + koszt + " zł, płatność " + platnosc;\n}',
              },
              {
                typ: "p",
                tekst:
                  "Gdy wpiszesz 2, wybierzesz „średnia”, zaznaczysz dostawę i kartę, po kliknięciu pojawi się: `Do zapłaty: 70 zł, płatność kartą`.",
              },
              {
                typ: "h",
                tekst: "Zaznaczony przycisk opcji przez selektor",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let wybrany = document.querySelector(\'input[name="platnosc"]:checked\');\nlet wartosc = wybrany ? wybrany.value : "brak";',
              },
              {
                typ: "uwaga",
                tekst:
                  "Nie myl `value` z `innerHTML`. Treść wpisaną w `<input>` czytasz przez `value`. `innerHTML` służy do zawartości elementów takich jak `<p>` czy `<div>`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Polecenie typu „jeśli zaznaczono pole wyboru, dolicz…” rozwiązujesz warunkiem `if (element.checked)`.",
              },
            ],
          },
          {
            id: "js-dom-zmiana",
            tytul: "Zmiana treści, stylu i atrybutów",
            skrot:
              "`innerHTML`, `style.wlasciwosc`, `classList`, `setAttribute` i zmiana `src` obrazu.",
            tresc: [
              {
                typ: "h",
                tekst: "Treść",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let blok = document.getElementById("blok");\nblok.innerHTML = "<h3>Nowy tytuł</h3>";\nblok.innerHTML += "<p>Dopisany akapit</p>";',
              },
              {
                typ: "p",
                tekst: "`=` zastępuje całą treść, a `+=` dopisuje na końcu.",
              },
              {
                typ: "h",
                tekst: "Styl - właściwość style",
              },
              {
                typ: "p",
                tekst:
                  "Nazwy właściwości CSS z myślnikiem zapisujemy w JS w camelCase: `background-color` → `backgroundColor`, `font-size` → `fontSize`.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let blok = document.getElementById("blok");\nblok.style.backgroundColor = "SteelBlue";\nblok.style.color = "white";\nblok.style.fontSize = "20px";\nblok.style.display = "none";\nblok.style.display = "block";',
              },
              {
                typ: "uwaga",
                tekst:
                  'Wartości z jednostką podaj jako napis z jednostką: `"20px"`, a nie `20`.',
              },
              {
                typ: "h",
                tekst: "Klasy CSS - classList",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let menu = document.getElementById("menu");\nmenu.classList.add("aktywne");\nmenu.classList.remove("ukryte");\nmenu.classList.toggle("ciemny");\nlet czy = menu.classList.contains("aktywne");\nmenu.className = "jedna druga";',
              },
              {
                typ: "lista",
                elementy: [
                  "`add` dodaje klasę, `remove` usuwa, `toggle` przełącza (dodaje, gdy nie ma, usuwa, gdy jest).",
                  "`className` nadpisuje cały atrybut `class`.",
                ],
              },
              {
                typ: "h",
                tekst: "Atrybuty",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let obraz = document.getElementById("zdjecie");\nobraz.src = "kot2.jpg";\nobraz.alt = "Kot śpiący";\nobraz.setAttribute("title", "Kliknij, aby powiększyć");\nlet plik = obraz.getAttribute("src");',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie testowe: która metoda zmienia wartość atrybutu elementu? Odpowiedź: `setAttribute()`. Polecenie praktyczne „zmień kolor tła bloku na …” rozwiązujesz przez `element.style.backgroundColor`.",
              },
            ],
          },
          {
            id: "js-dom-tworzenie",
            tytul: "Tworzenie i usuwanie elementów",
            skrot:
              "`createElement`, `appendChild`, `append`, `remove` - dynamiczne budowanie listy.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Zamiast sklejać HTML w napisie, możemy tworzyć elementy jak obiekty i dołączać je do drzewa DOM.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<input type="text" id="zadanie">\n<button onclick="dodaj()">Dodaj</button>\n<ol id="lista"></ol>',
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function dodaj() {\n  let tekst = document.getElementById("zadanie").value;\n  if (tekst === "") return;\n  let li = document.createElement("li");\n  li.textContent = tekst;\n  li.onclick = function () {\n    li.remove();\n  };\n  document.getElementById("lista").appendChild(li);\n  document.getElementById("zadanie").value = "";\n}',
              },
              {
                typ: "kroki",
                elementy: [
                  "Pobierz tekst z pola.",
                  'Utwórz nowy element `<li>` przez `document.createElement("li")`.',
                  "Ustaw jego treść przez `textContent`.",
                  "Dołącz go do listy przez `appendChild`.",
                  'Wyczyść pole, przypisując `value = ""`.',
                ],
              },
              {
                typ: "p",
                tekst:
                  "Każde kliknięcie przycisku dodaje nowy punkt listy numerowanej. Kliknięcie punktu usuwa go ze strony.",
              },
              {
                typ: "tabela",
                naglowki: ["Metoda", "Działanie"],
                wiersze: [
                  [
                    '`createElement("tag")`',
                    "tworzy nowy element (jeszcze niewidoczny)",
                  ],
                  [
                    "`rodzic.appendChild(el)`",
                    "dodaje element jako ostatnie dziecko",
                  ],
                  [
                    "`rodzic.prepend(el)`",
                    "dodaje element jako pierwsze dziecko",
                  ],
                  ["`el.remove()`", "usuwa element ze strony"],
                  ["`rodzic.removeChild(el)`", "usuwa wskazane dziecko"],
                ],
              },
            ],
          },
        ],
      },
      {
        id: "js-interakcja",
        tytul: "Zdarzenia i interakcja",
        tematy: [
          {
            id: "js-zdarzenia",
            tytul: "Obsługa zdarzeń",
            skrot:
              "`onclick`, `onchange`, `oninput`, `onmouseover`, `onload`, `addEventListener` i obiekt zdarzenia.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Zdarzenie to coś, co się dzieje na stronie: kliknięcie, najechanie myszą, zmiana pola, wczytanie strony. Do zdarzenia podpinamy funkcję.",
              },
              {
                typ: "tabela",
                naglowki: ["Zdarzenie", "Kiedy zachodzi"],
                wiersze: [
                  ["`click`", "kliknięcie elementu"],
                  ["`dblclick`", "podwójne kliknięcie"],
                  [
                    "`mouseover` / `mouseout`",
                    "kursor najeżdża / opuszcza element",
                  ],
                  [
                    "`change`",
                    "zmiana wartości pola po zatwierdzeniu (np. wybór w `<select>`)",
                  ],
                  ["`input`", "każda zmiana treści pola w trakcie pisania"],
                  ["`keydown` / `keyup`", "wciśnięcie / puszczenie klawisza"],
                  ["`submit`", "wysłanie formularza"],
                  ["`load`", "wczytanie strony lub obrazu"],
                  ["`focus` / `blur`", "pole dostaje / traci kursor"],
                ],
              },
              {
                typ: "h",
                tekst: "Sposób 1: atrybut w HTML",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<button onclick="pokaz()">Pokaż</button>\n<img src="a.jpg" onmouseover="this.src=\'b.jpg\'" onmouseout="this.src=\'a.jpg\'" alt="zdjęcie">\n<select id="motyw" onchange="zmienMotyw()">\n  <option value="white">jasny</option>\n  <option value="black">ciemny</option>\n</select>\n<body onload="start()">',
              },
              {
                typ: "h",
                tekst: "Sposób 2: addEventListener",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let przycisk = document.getElementById("przycisk");\nprzycisk.addEventListener("click", function () {\n  alert("Kliknięto!");\n});\ndocument.getElementById("imie").addEventListener("input", function (e) {\n  document.getElementById("podglad").textContent = e.target.value;\n});',
              },
              {
                typ: "lista",
                elementy: [
                  'W `addEventListener` nazwa zdarzenia jest **bez** przedrostka `on`: `"click"`, a nie `"onclick"`.',
                  'Przekazujemy funkcję, a nie jej wynik: `addEventListener("click", licz)` - bez nawiasów po `licz`.',
                  "Parametr `e` (obiekt zdarzenia) zawiera m.in. `e.target` - element, który wywołał zdarzenie - i `e.key` - wciśnięty klawisz.",
                  "`e.preventDefault()` blokuje domyślne działanie, np. wysłanie formularza.",
                ],
              },
              {
                typ: "p",
                tekst:
                  "Drugi przykład na bieżąco przepisuje tekst z pola `#imie` do elementu `#podglad` przy każdej wpisanej literze.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie testowe: które zdarzenie zachodzi po najechaniu kursorem na element? Odpowiedź: `onmouseover`. Po wczytaniu strony: `onload`.",
              },
            ],
          },
          {
            id: "js-walidacja",
            tytul: "Walidacja formularza, prompt i confirm",
            skrot:
              "Sprawdzanie pustych pól, długości i poprawności danych; okna `prompt` i `confirm`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Walidacja to sprawdzenie danych przed ich użyciem. Na egzaminie często trzeba sprawdzić, czy pola nie są puste, czy hasła są zgodne lub czy zaznaczono zgodę.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<form onsubmit="return sprawdz()">\n  <input type="text" id="login" placeholder="login">\n  <input type="password" id="haslo1">\n  <input type="password" id="haslo2">\n  <label><input type="checkbox" id="regulamin"> akceptuję regulamin</label>\n  <button type="submit">Zarejestruj</button>\n</form>\n<p id="komunikat"></p>',
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function sprawdz() {\n  let login = document.getElementById("login").value;\n  let h1 = document.getElementById("haslo1").value;\n  let h2 = document.getElementById("haslo2").value;\n  let kom = document.getElementById("komunikat");\n  if (login == "" || h1 == "") {\n    kom.innerHTML = "Wypełnij wszystkie pola";\n    return false;\n  }\n  if (h1.length < 8) {\n    kom.innerHTML = "Hasło musi mieć co najmniej 8 znaków";\n    return false;\n  }\n  if (h1 != h2) {\n    kom.innerHTML = "Hasła się różnią";\n    return false;\n  }\n  if (!document.getElementById("regulamin").checked) {\n    kom.innerHTML = "Zaakceptuj regulamin";\n    return false;\n  }\n  return true;\n}',
              },
              {
                typ: "p",
                tekst:
                  "Gdy funkcja zwróci `false`, formularz się nie wyśle, a w akapicie pojawi się odpowiedni komunikat. Zwrócenie `true` pozwala wysłać dane.",
              },
              {
                typ: "h",
                tekst: "Okna dialogowe",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Wygląd", "Zwraca"],
                wiersze: [
                  [
                    '`alert("tekst")`',
                    "komunikat i przycisk OK",
                    "`undefined`",
                  ],
                  [
                    '`confirm("Na pewno?")`',
                    "przyciski OK i Anuluj",
                    "`true` (OK) lub `false` (Anuluj)",
                  ],
                  [
                    '`prompt("Podaj imię", "domyślne")`',
                    "pole tekstowe",
                    "wpisany **napis** lub `null` (Anuluj)",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let wiek = Number(prompt("Ile masz lat?"));\nif (confirm("Czy na pewno masz " + wiek + " lat?")) {\n  document.getElementById("komunikat").innerHTML = "Dziękujemy!";\n}',
              },
              {
                typ: "h",
                tekst: "Walidacja HTML5",
              },
              {
                typ: "p",
                tekst:
                  'Część sprawdzania zrobi sama przeglądarka dzięki atrybutom: `required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, `type="email"`.',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pamiętaj, że walidacja w JS działa tylko w przeglądarce i można ją wyłączyć. Dlatego dane i tak sprawdza się ponownie po stronie serwera (PHP).",
              },
            ],
          },
          {
            id: "js-timery",
            tytul: "Timery: setTimeout i setInterval",
            skrot:
              "Opóźnione i cykliczne wykonanie funkcji, np. zegar lub automatyczny pokaz slajdów.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie"],
                wiersze: [
                  [
                    "`setTimeout(f, ms)`",
                    "wykona funkcję **jeden raz** po `ms` milisekundach",
                  ],
                  [
                    "`setInterval(f, ms)`",
                    "wykonuje funkcję **cyklicznie** co `ms` milisekund",
                  ],
                  [
                    "`clearTimeout(id)` / `clearInterval(id)`",
                    "anuluje timer o podanym identyfikatorze",
                  ],
                ],
              },
              {
                typ: "p",
                tekst: "1000 ms to 1 sekunda.",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'setTimeout(function () {\n  document.getElementById("info").innerHTML = "Minęły 3 sekundy";\n}, 3000);',
              },
              {
                typ: "h",
                tekst: "Zegar na stronie",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function zegar() {\n  let t = new Date();\n  let g = String(t.getHours()).padStart(2, "0");\n  let m = String(t.getMinutes()).padStart(2, "0");\n  let s = String(t.getSeconds()).padStart(2, "0");\n  document.getElementById("zegar").innerHTML = g + ":" + m + ":" + s;\n}\nzegar();\nlet idZegara = setInterval(zegar, 1000);',
              },
              {
                typ: "p",
                tekst:
                  'Element `#zegar` co sekundę pokazuje aktualny czas, np. `09:05:42`. `padStart(2, "0")` dokleja zero z przodu liczb jednocyfrowych.',
              },
              {
                typ: "h",
                tekst: "Zatrzymanie",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'document.getElementById("stop").onclick = function () {\n  clearInterval(idZegara);\n};',
              },
              {
                typ: "uwaga",
                tekst:
                  "Przekazuj nazwę funkcji bez nawiasów: `setInterval(zegar, 1000)`. Zapis `setInterval(zegar(), 1000)` wywoła funkcję tylko raz.",
              },
            ],
          },
        ],
      },
      {
        id: "js-egzamin",
        tytul: "Zadania egzaminacyjne",
        tematy: [
          {
            id: "js-przyklady",
            tytul: "Typowe skrypty z arkuszy",
            skrot:
              "Gotowe wzorce: kalkulator kosztu, sprawdzenie hasła, zmiana koloru bloku, galeria zdjęć, licznik.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Skrypty z części praktycznej są krótkie i powtarzalne. Oto najczęstsze schematy.",
              },
              {
                typ: "h",
                tekst: "1. Oblicz koszt",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function oblicz() {\n  let km = Number(document.getElementById("km").value);\n  let spalanie = Number(document.getElementById("spalanie").value);\n  let cena = Number(document.getElementById("cena").value);\n  let koszt = km * spalanie / 100 * cena;\n  document.getElementById("wynik").innerHTML = "Koszt podróży: " + koszt.toFixed(2) + " zł";\n}',
              },
              {
                typ: "p",
                tekst:
                  "Dla 300 km, spalania 6 l i ceny 6.50 zł na stronie pojawi się `Koszt podróży: 117.00 zł`.",
              },
              {
                typ: "h",
                tekst: "2. Sprawdź siłę hasła",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function sprawdzHaslo() {\n  let h = document.getElementById("haslo").value;\n  let maCyfre = false;\n  for (let znak of h) {\n    if (znak >= "0" && znak <= "9") maCyfre = true;\n  }\n  let wynik = document.getElementById("wynik");\n  if (h.length >= 8 && maCyfre) {\n    wynik.innerHTML = "Hasło silne";\n    wynik.style.color = "green";\n  } else {\n    wynik.innerHTML = "Hasło słabe";\n    wynik.style.color = "red";\n  }\n}',
              },
              {
                typ: "h",
                tekst: "3. Zmień kolor bloku",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<div id="blok">Tekst w bloku</div>\n<button onclick="kolor(\'Tomato\')">Czerwony</button>\n<button onclick="kolor(\'SeaGreen\')">Zielony</button>',
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function kolor(k) {\n  document.getElementById("blok").style.backgroundColor = k;\n}',
              },
              {
                typ: "h",
                tekst: "4. Galeria - następne i poprzednie zdjęcie",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let zdjecia = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];\nlet nr = 0;\nfunction pokaz(krok) {\n  nr = nr + krok;\n  if (nr >= zdjecia.length) nr = 0;\n  if (nr < 0) nr = zdjecia.length - 1;\n  document.getElementById("duze").src = zdjecia[nr];\n}',
              },
              {
                typ: "p",
                tekst:
                  'Przyciski mają `onclick="pokaz(1)"` i `onclick="pokaz(-1)"`. Po ostatnim zdjęciu galeria wraca do pierwszego.',
              },
              {
                typ: "h",
                tekst: "5. Miniatura otwiera duże zdjęcie",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<img src="mini1.jpg" onclick="powieksz(\'duze1.jpg\')" alt="miniatura">\n<img id="duze" src="duze1.jpg" alt="podgląd">',
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function powieksz(plik) {\n  document.getElementById("duze").src = plik;\n}',
              },
              {
                typ: "h",
                tekst: "6. Licznik kliknięć i pokaż/ukryj",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'let licznik = 0;\nfunction polub() {\n  licznik++;\n  document.getElementById("polubienia").innerHTML = licznik + " polubień";\n}\nfunction przelacz() {\n  let el = document.getElementById("szczegoly");\n  el.style.display = el.style.display == "none" ? "block" : "none";\n}',
              },
              {
                typ: "egzamin",
                tekst:
                  "W poleceniu szukaj słów-kluczy: „pobiera z pól” → `value`, „zaznaczone” → `checked`, „wypisuje w akapicie” → `innerHTML`, „zmienia kolor/tło” → `style`, „zmienia obraz” → `src`.",
              },
            ],
          },
          {
            id: "js-zadanie-krok",
            tytul: "Zadanie egzaminacyjne krok po kroku",
            skrot:
              "Pełne rozwiązanie typowego zadania: formularz, przycisk, obliczenie i wynik w akapicie.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Treść przykładowego polecenia:** Na stronie biura podróży umieść formularz z polami: liczba osób (number), liczba dni (number), lista wyboru standardu („ekonomiczny” 100 zł, „komfort” 180 zł za osobę za dzień) oraz polem wyboru „ubezpieczenie” (dodatkowe 15 zł za osobę). Pod formularzem przycisk OBLICZ. Skrypt po kliknięciu wylicza koszt i wypisuje w akapicie: „Koszt wycieczki: X zł”. Jeżeli któreś pole liczbowe jest puste lub mniejsze od 1, w akapicie wypisz „Uzupełnij poprawnie dane” w kolorze czerwonym.",
              },
              {
                typ: "h",
                tekst: "Plan działania",
              },
              {
                typ: "kroki",
                elementy: [
                  "Zbuduj formularz w HTML i nadaj każdemu polu unikalne `id`.",
                  'Dodaj pusty akapit na wynik, np. `<p id="wynik"></p>`.',
                  "Podłącz skrypt na końcu `<body>` lub z `defer`.",
                  "Napisz funkcję `oblicz()` i przypisz ją do przycisku przez `onclick`.",
                  "W funkcji pobierz wartości (`value`, `checked`) i zamień je na liczby.",
                  "Sprawdź poprawność danych instrukcją `if`.",
                  "Oblicz wynik i wpisz go przez `innerHTML`.",
                  "Przetestuj w przeglądarce różne przypadki i sprawdź konsolę (F12).",
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n  <meta charset="UTF-8">\n  <title>Biuro podróży</title>\n</head>\n<body>\n  <section id="formularz">\n    <h2>Oblicz koszt wycieczki</h2>\n    <label for="osoby">Liczba osób:</label>\n    <input type="number" id="osoby" min="1"><br>\n    <label for="dni">Liczba dni:</label>\n    <input type="number" id="dni" min="1"><br>\n    <label for="standard">Standard:</label>\n    <select id="standard">\n      <option value="100">ekonomiczny</option>\n      <option value="180">komfort</option>\n    </select><br>\n    <input type="checkbox" id="ubezpieczenie">\n    <label for="ubezpieczenie">ubezpieczenie</label><br>\n    <button onclick="oblicz()">OBLICZ</button>\n    <p id="wynik"></p>\n  </section>\n  <script src="skrypt.js"></script>\n</body>\n</html>',
                tytul: "index.html",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: 'function oblicz() {\n  let osoby = Number(document.getElementById("osoby").value);\n  let dni = Number(document.getElementById("dni").value);\n  let cena = Number(document.getElementById("standard").value);\n  let ubezpieczenie = document.getElementById("ubezpieczenie").checked;\n  let wynik = document.getElementById("wynik");\n\n  if (osoby < 1 || dni < 1) {\n    wynik.innerHTML = "Uzupełnij poprawnie dane";\n    wynik.style.color = "red";\n    return;\n  }\n\n  let koszt = osoby * dni * cena;\n  if (ubezpieczenie) {\n    koszt += osoby * 15;\n  }\n\n  wynik.style.color = "black";\n  wynik.innerHTML = "Koszt wycieczki: " + koszt + " zł";\n}',
                tytul: "skrypt.js",
              },
              {
                typ: "h",
                tekst: "Co zobaczysz na ekranie",
              },
              {
                typ: "lista",
                elementy: [
                  "2 osoby, 5 dni, „komfort”, z ubezpieczeniem: `Koszt wycieczki: 1830 zł` (2·5·180 = 1800, plus 2·15 = 30).",
                  'Puste pole liczby osób: `Number("")` daje `0`, więc warunek `osoby < 1` jest prawdziwy i pojawia się czerwony napis `Uzupełnij poprawnie dane`.',
                  "Po poprawieniu danych kolor wraca do czarnego, bo ustawiamy go jawnie.",
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  'Przycisk wewnątrz `<form>` domyślnie wysyła formularz i przeładowuje stronę - wynik mignie i zniknie. Dlatego tutaj przycisk nie jest w `<form>`. Jeśli musi być, dodaj mu `type="button"`.',
              },
              {
                typ: "egzamin",
                tekst:
                  "Egzaminator sprawdza: czy skrypt pobiera dane z właściwych pól, czy obliczenie jest poprawne, czy wynik pojawia się w miejscu wskazanym w arkuszu i czy tekst komunikatu jest **dokładnie** taki jak w poleceniu. Przepisuj komunikaty znak w znak.",
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        pytanie: "Która metoda wyświetla komunikat w konsoli przeglądarki?",
        odpowiedzi: [
          '`console.log("test")`',
          '`alert("test")`',
          '`document.write("test")`',
          '`window.print("test")`',
        ],
        poprawna: 0,
        wyjasnienie:
          "`console.log()` wypisuje dane w konsoli narzędzi deweloperskich (F12).",
      },
      {
        pytanie: "Instrukcja `zmienna++;` daje taki sam efekt jak:",
        odpowiedzi: [
          "`zmienna === zmienna + 1;`",
          "`zmienna += 1;`",
          "`zmienna = zmienna + 10;`",
          "`zmienna--;`",
        ],
        poprawna: 1,
        wyjasnienie:
          "Operator `++` zwiększa wartość o 1, czyli tak samo jak `+= 1`.",
      },
      {
        pytanie:
          'Jaki będzie wynik działania wyrażenia `"5" + 2` w JavaScript?',
        odpowiedzi: ["`7`", "`NaN`", '`"52"`', "błąd składni"],
        poprawna: 2,
        wyjasnienie:
          "Gdy jeden z argumentów `+` jest napisem, następuje łączenie tekstów.",
      },
      {
        pytanie: 'Co zwróci wyrażenie `5 === "5"`?',
        odpowiedzi: ["`true`", "`undefined`", "`NaN`", "`false`"],
        poprawna: 3,
        wyjasnienie:
          "Operator `===` porównuje wartość i typ. Liczba i napis to różne typy.",
      },
      {
        pytanie: 'Metoda `document.getElementById("x")` służy do:',
        odpowiedzi: [
          "zwrócenia referencji do elementu o identyfikatorze `x`",
          "wyświetlenia na stronie tekstu `x`",
          "utworzenia nowego elementu o id `x`",
          "sprawdzenia poprawności formularza `x`",
        ],
        poprawna: 0,
        wyjasnienie:
          "Metoda zwraca obiekt elementu z danym `id` (lub `null`, gdy go nie ma).",
      },
      {
        pytanie:
          "Które zdarzenie zachodzi, gdy kursor myszy zostanie umieszczony nad elementem?",
        odpowiedzi: ["`onclick`", "`onmouseover`", "`onload`", "`onchange`"],
        poprawna: 1,
        wyjasnienie:
          "`onmouseover` reaguje na najechanie kursorem, `onmouseout` na jego opuszczenie.",
      },
      {
        pytanie:
          "Które wyrażenie losuje liczbę całkowitą z przedziału od 1 do 10?",
        odpowiedzi: [
          "`Math.random(1, 10)`",
          "`Math.round(Math.random() * 10)`",
          "`Math.floor(Math.random() * 10) + 1`",
          "`Math.ceil(Math.random()) * 10`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`Math.random() * 10` daje 0-9.99, `Math.floor` obcina do 0-9, a `+ 1` przesuwa do 1-10.",
      },
      {
        pytanie: "Co zwróci `typeof [1, 2, 3]`?",
        odpowiedzi: ['`"array"`', '`"number"`', '`"list"`', '`"object"`'],
        poprawna: 3,
        wyjasnienie:
          'Tablice w JavaScript są obiektami, więc `typeof` zwraca `"object"`.',
      },
      {
        pytanie:
          'Wartość wpisana przez użytkownika do pola `<input type="number">` odczytana przez `value` jest typu:',
        odpowiedzi: ["string", "number", "boolean", "object"],
        poprawna: 0,
        wyjasnienie:
          "Właściwość `value` zawsze zwraca napis. Trzeba go zamienić na liczbę, np. `Number()`.",
      },
      {
        pytanie: 'Co zwróci `parseInt("15abc")`?',
        odpowiedzi: ["`NaN`", "`15`", '`"15"`', "`0`"],
        poprawna: 1,
        wyjasnienie:
          "`parseInt` czyta cyfry od początku napisu i zatrzymuje się na pierwszym znaku, który nie jest cyfrą.",
      },
      {
        pytanie:
          "Aby sprawdzić, czy pole wyboru (checkbox) o id `zgoda` jest zaznaczone, należy użyć:",
        odpowiedzi: [
          '`document.getElementById("zgoda").value`',
          '`document.getElementById("zgoda").selected`',
          '`document.getElementById("zgoda").checked`',
          '`document.getElementById("zgoda").innerHTML`',
        ],
        poprawna: 2,
        wyjasnienie:
          "Właściwość `checked` przyjmuje `true` dla zaznaczonego pola.",
      },
      {
        pytanie:
          "Ile razy wykona się pętla `for (let i = 0; i <= 10; i += 2)`?",
        odpowiedzi: ["5", "10", "11", "6"],
        poprawna: 3,
        wyjasnienie:
          "Licznik przyjmuje wartości 0, 2, 4, 6, 8, 10 - to 6 obrotów.",
      },
      {
        pytanie:
          "Które wyrażenie jest prawdziwe dla liczb z przedziału domkniętego lewostronnie od -200 do -100 (bez -100)?",
        odpowiedzi: [
          "`(liczba >= -200) && (liczba < -100)`",
          "`(liczba > -200) || (liczba < -100)`",
          "`(liczba <= -200) && (liczba > -100)`",
          "`(liczba >= -200) || (liczba <= -100)`",
        ],
        poprawna: 0,
        wyjasnienie:
          "Oba warunki muszą być spełnione jednocześnie (`&&`), -200 wchodzi do przedziału, -100 nie.",
      },
      {
        pytanie: "Która metoda pozwala zmienić wartość atrybutu elementu HTML?",
        odpowiedzi: [
          "`getAttribute()`",
          "`setAttribute()`",
          "`attribute()`",
          "`innerHTML`",
        ],
        poprawna: 1,
        wyjasnienie:
          "`setAttribute(nazwa, wartość)` ustawia atrybut, `getAttribute` go tylko odczytuje.",
      },
      {
        pytanie:
          'Kod pobiera elementy przez `document.getElementsByClassName("styl1")` i w pętli ustawia każdemu `style.fontWeight = "bold"`. Efektem jest:',
        odpowiedzi: [
          "pogrubienie tylko pierwszego elementu z klasą `styl1`",
          "pogrubienie elementu o id `styl1`",
          "pogrubienie wszystkich elementów z klasą `styl1`",
          "pogrubienie wszystkich elementów strony",
        ],
        poprawna: 2,
        wyjasnienie:
          "Metoda zwraca kolekcję wszystkich elementów z klasą, a pętla zmienia każdy z nich.",
      },
      {
        pytanie:
          "Jak w JavaScript zapisać właściwość CSS `background-color` przy zmianie stylu elementu?",
        odpowiedzi: [
          "`el.style.background-color`",
          '`el.style["background_color"]`',
          "`el.css.backgroundColor`",
          "`el.style.backgroundColor`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Nazwy z myślnikiem zapisujemy w camelCase: `backgroundColor`.",
      },
      {
        pytanie:
          'Co zwraca funkcja `confirm("Czy usunąć?")`, gdy użytkownik kliknie Anuluj?',
        odpowiedzi: ["`false`", "`null`", "`0`", "pusty napis"],
        poprawna: 0,
        wyjasnienie:
          "`confirm` zwraca `true` dla OK i `false` dla Anuluj. `null` zwraca `prompt`.",
      },
      {
        pytanie:
          "Który zapis tworzy w JavaScript stałą, której nie można ponownie przypisać?",
        odpowiedzi: [
          "`var PI = 3.14;`",
          "`const PI = 3.14;`",
          "`let PI = 3.14;`",
          "`static PI = 3.14;`",
        ],
        poprawna: 1,
        wyjasnienie:
          "Słowo `const` deklaruje stałą. Próba zmiany kończy się błędem.",
      },
      {
        pytanie:
          "Po wykonaniu kodu `let t = [10, 2, 33, 4]; t.sort();` tablica `t` ma postać:",
        odpowiedzi: [
          "`[2, 4, 10, 33]`",
          "`[33, 10, 4, 2]`",
          "`[10, 2, 33, 4]`",
          "`[4, 33, 2, 10]`",
        ],
        poprawna: 2,
        wyjasnienie:
          '`sort()` bez argumentu porównuje elementy jako napisy: "10" < "2" < "33" < "4".',
      },
      {
        pytanie:
          "Która funkcja wykonuje wskazaną funkcję cyklicznie co określony czas?",
        odpowiedzi: [
          "`setTimeout()`",
          "`setDelay()`",
          "`repeat()`",
          "`setInterval()`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`setInterval(f, ms)` uruchamia funkcję co `ms` milisekund, aż do `clearInterval`.",
      },
      {
        pytanie: 'Jaką wartość zwróci `"Informatyk".length`?',
        odpowiedzi: ["10", "9", "11", "`undefined`"],
        poprawna: 0,
        wyjasnienie: 'Napis "Informatyk" ma 10 znaków.',
      },
      {
        pytanie: 'Instrukcja `let s = "egzamin"; s.toUpperCase();` zwróci:',
        odpowiedzi: [
          '`"Egzamin"`',
          '`"EGZAMIN"`',
          '`"egzamin"`',
          '`"eGZAMIN"`',
        ],
        poprawna: 1,
        wyjasnienie: "`toUpperCase()` zamienia wszystkie litery na wielkie.",
      },
      {
        pytanie: "Metody i właściwości DOM w języku JavaScript umożliwiają:",
        odpowiedzi: [
          "wysłanie danych formularza bezpośrednio do bazy danych",
          "wykonywanie zapytań SQL na serwerze",
          "odczytywanie i modyfikowanie elementów wyświetlonej strony",
          "kompilację kodu HTML",
        ],
        poprawna: 2,
        wyjasnienie:
          "DOM to model dokumentu, przez który skrypt czyta i zmienia elementy strony.",
      },
      {
        pytanie: "Metoda tablicy `push()`:",
        odpowiedzi: [
          "usuwa ostatni element tablicy",
          "dodaje element na początek tablicy",
          "sortuje tablicę",
          "dodaje element na koniec tablicy",
        ],
        poprawna: 3,
        wyjasnienie:
          "`push` dodaje na koniec, `pop` usuwa z końca, `unshift` dodaje na początek, `shift` usuwa z początku.",
      },
      {
        pytanie:
          "Technologia umożliwiająca wymianę danych z serwerem bez przeładowania całej strony to:",
        odpowiedzi: ["AJAX", "PHP", "CSS", "XHTML"],
        poprawna: 0,
        wyjasnienie:
          "AJAX (Asynchronous JavaScript and XML) wysyła żądania w tle, np. przez `fetch`.",
      },
      {
        pytanie:
          'Która instrukcja wstawi do akapitu `<p id="w">` pogrubiony tekst „OK”?',
        odpowiedzi: [
          '`document.getElementById("w").value = "<b>OK</b>";`',
          '`document.getElementById("w").innerHTML = "<b>OK</b>";`',
          '`document.getElementById("w").textContent = "<b>OK</b>";`',
          '`document.write("w", "<b>OK</b>");`',
        ],
        poprawna: 1,
        wyjasnienie:
          "`innerHTML` interpretuje znaczniki HTML. `textContent` pokazałby je jako zwykły tekst.",
      },
      {
        pytanie: "Ile razy wykona się blok `do { … } while (false);`?",
        odpowiedzi: ["0", "nieskończenie wiele", "1", "2"],
        poprawna: 2,
        wyjasnienie:
          "Pętla `do…while` sprawdza warunek po wykonaniu bloku, więc zawsze wykona się przynajmniej raz.",
      },
      {
        pytanie: "Co oznacza w JavaScript wartość `NaN`?",
        odpowiedzi: [
          "wartość pustą",
          "zmienną niezadeklarowaną",
          "nieskończoność",
          "wynik, który nie jest poprawną liczbą",
        ],
        poprawna: 3,
        wyjasnienie:
          '`NaN` (Not a Number) powstaje np. przy `"abc" * 2`. Sprawdzamy ją funkcją `isNaN()`.',
      },
      {
        pytanie:
          "Które zdarzenie zostanie wywołane po całkowitym wczytaniu strony?",
        odpowiedzi: ["`onload`", "`onsubmit`", "`onfocus`", "`onblur`"],
        poprawna: 0,
        wyjasnienie:
          '`onload` (np. w `<body onload="start()">`) zachodzi po załadowaniu strony.',
      },
      {
        pytanie: "Wynikiem `(7.456).toFixed(1)` jest:",
        odpowiedzi: [
          "liczba `7.4`",
          'napis `"7.5"`',
          "liczba `7`",
          'napis `"7.4"`',
        ],
        poprawna: 1,
        wyjasnienie:
          "`toFixed` zaokrągla do podanej liczby miejsc i zwraca napis. 7.456 po zaokrągleniu do 1 miejsca to 7.5.",
      },
      {
        pytanie:
          "Wewnątrz `if` w JavaScript zamiast `if (a == 5)` napisano `if (a = 5)`. Co się stanie?",
        odpowiedzi: [
          "kod zgłosi błąd składni",
          "warunek zawsze będzie fałszywy",
          "do `a` zostanie przypisane 5, a warunek będzie prawdziwy",
          "warunek porówna typy",
        ],
        poprawna: 2,
        wyjasnienie:
          "Pojedynczy `=` to przypisanie. Wartość 5 jest traktowana jako prawda.",
      },
      {
        pytanie:
          "Która deklaracja funkcji strzałkowej zwraca podwojoną wartość argumentu?",
        odpowiedzi: [
          "`const f = x -> x * 2;`",
          "`const f = function => x * 2;`",
          "`const f => (x) x * 2;`",
          "`const f = (x) => x * 2;`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Składnia funkcji strzałkowej: `(parametry) => wyrażenie`.",
      },
      {
        pytanie:
          'Aby skrypt w sekcji `<head>` wykonał się dopiero po wczytaniu całego dokumentu HTML, znacznik `<script src="s.js">` należy uzupełnić o atrybut:',
        odpowiedzi: ["`defer`", "`wait`", "`onload`", '`type="late"`'],
        poprawna: 0,
        wyjasnienie:
          "Atrybut `defer` opóźnia wykonanie zewnętrznego skryptu do zakończenia parsowania HTML.",
      },
      {
        pytanie:
          "Która zmienna zadeklarowana wewnątrz bloku `{ }` instrukcji `if` jest dostępna także poza tym blokiem?",
        odpowiedzi: [
          "zadeklarowana przez `let`",
          "zadeklarowana przez `var`",
          "zadeklarowana przez `const`",
          "żadna z nich",
        ],
        poprawna: 1,
        wyjasnienie:
          "`var` ma zasięg funkcyjny i ignoruje bloki. `let` i `const` mają zasięg blokowy.",
      },
    ],
  },
  {
    id: "php",
    nazwa: "PHP",
    opis: "Język skryptowy działający na serwerze: składnia, tablice, formularze, sesje i ciasteczka, a przede wszystkim praca z bazą MySQL przez mysqli - dokładnie tak, jak w skryptach z części praktycznej INF.03.",
    dzialy: [
      {
        id: "php-podstawy",
        tytul: "Podstawy języka",
        tematy: [
          {
            id: "php-wstep",
            tytul: "Czym jest PHP i jak go uruchomić",
            skrot:
              "PHP działa na serwerze, a przeglądarka dostaje gotowy HTML; potrzebny jest serwer, np. Apache z XAMPP.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**PHP** to język skryptowy wykonywany **po stronie serwera**. Serwer uruchamia skrypt, a do przeglądarki wysyła tylko wynik - zwykły HTML. Użytkownik nie widzi kodu PHP, nawet po kliknięciu „Pokaż źródło”.",
              },
              {
                typ: "h",
                tekst: "Jak to działa",
              },
              {
                typ: "kroki",
                elementy: [
                  "Przeglądarka wysyła żądanie, np. `http://localhost/sklep/index.php`.",
                  "Serwer WWW (Apache) widzi rozszerzenie `.php` i przekazuje plik do interpretera PHP.",
                  "PHP wykonuje kod, może przy tym połączyć się z bazą MySQL.",
                  "Wynik (HTML) wraca do przeglądarki i jest wyświetlany.",
                ],
              },
              {
                typ: "h",
                tekst: "Środowisko na egzaminie",
              },
              {
                typ: "lista",
                elementy: [
                  "Pakiet **XAMPP** zawiera Apache, MySQL/MariaDB, PHP i phpMyAdmin.",
                  "W panelu XAMPP uruchamiasz moduły **Apache** i **MySQL**.",
                  "Pliki strony zapisujesz w folderze `htdocs`, np. `C:\\xampp\\htdocs\\egzamin`.",
                  "Stronę otwierasz przez `http://localhost/egzamin/`, a **nie** podwójnym kliknięciem pliku.",
                  "Plik musi mieć rozszerzenie `.php`. W pliku `.html` kod PHP się nie wykona.",
                ],
              },
              {
                typ: "h",
                tekst: "Znaczniki PHP",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n    <meta charset="UTF-8">\n    <title>Pierwszy skrypt PHP</title>\n</head>\n<body>\n    <h1>Dzisiaj jest:</h1>\n    <p><?php echo date("d.m.Y"); ?></p>\n</body>\n</html>',
              },
              {
                typ: "p",
                tekst:
                  "Kod PHP wstawiamy między `<?php` a `?>`. Wszystko poza tymi znacznikami serwer wysyła bez zmian. Na ekranie pojawi się nagłówek i dzisiejsza data, np. `28.10.2026`.",
              },
              {
                typ: "lista",
                elementy: [
                  "Każdą instrukcję kończymy średnikiem `;`.",
                  "Komentarze w PHP: `// linia`, `# linia` oraz `/* blok */`.",
                  "Krótki zapis `<?= $x ?>` to to samo co `<?php echo $x; ?>`.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Na teście: PHP jest językiem **serwerowym**, JavaScript - **klienckim**. Do obsługi bazy MySQL w aplikacji internetowej służy PHP, a nie HTML czy CSS.",
              },
            ],
          },
          {
            id: "php-echo",
            tytul: "Wyświetlanie: echo i print",
            skrot:
              "`echo` i `print` wysyłają tekst i znaczniki HTML do przeglądarki.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`echo` wypisuje tekst. To, co wypiszesz, trafia do kodu HTML strony, więc możesz wypisywać też znaczniki.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\necho "Witaj na stronie!";\necho "<h2>Nagłówek z PHP</h2>";\necho "Jeden", " dwa", " trzy";\nprint "<p>Tekst przez print</p>";\n$imie = "Ola";\necho "<p>Cześć, $imie!</p>";\n?>',
              },
              {
                typ: "p",
                tekst:
                  "W przeglądarce zobaczysz: tekst **Witaj na stronie!**, nagłówek drugiego stopnia, napis `Jeden dwa trzy`, akapit `Tekst przez print` i akapit `Cześć, Ola!`.",
              },
              {
                typ: "tabela",
                naglowki: ["", "`echo`", "`print`"],
                wiersze: [
                  ["Liczba argumentów", "wiele, po przecinku", "jeden"],
                  ["Zwraca wartość", "nie", "zawsze `1`"],
                  ["Szybkość", "minimalnie szybszy", "minimalnie wolniejszy"],
                ],
              },
              {
                typ: "h",
                tekst: "Wyświetlanie zawartości zmiennej do testów",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$dane = [3, "kot", true];\nvar_dump($dane);\nprint_r($dane);\n?>',
              },
              {
                typ: "p",
                tekst:
                  '`var_dump` pokazuje typy i wartości, np. `int(3)`, `string(3) "kot"`, `bool(true)`. `print_r` pokazuje strukturę tablicy w czytelnej formie. To narzędzia do sprawdzania kodu, nie do finalnej strony.',
              },
              {
                typ: "egzamin",
                tekst:
                  'Na egzaminie praktycznym wyniki zapytań wypisujesz przez `echo` wewnątrz znaczników wymaganych w arkuszu, np. `echo "<li>$nazwa</li>";`.',
              },
            ],
          },
          {
            id: "php-zmienne",
            tytul: "Zmienne, stałe i typy danych",
            skrot:
              "Zmienne zaczynają się od `$`; typy: int, float, string, bool, array, null; stałe przez `define` lub `const`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "W PHP nazwa każdej zmiennej zaczyna się od znaku `$`. Typ ustala się automatycznie na podstawie wartości.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wiek = 17;\n$cena = 19.99;\n$nazwa = "Laptop";\n$dostepny = true;\n$brak = null;\n$kolory = ["red", "green"];\ndefine("VAT", 0.23);\nconst SKLEP = "TechShop";\necho $nazwa . " kosztuje " . $cena * (1 + VAT) . " zł w sklepie " . SKLEP;\n?>',
              },
              {
                typ: "tabela",
                naglowki: ["Typ", "Przykład", "Opis"],
                wiersze: [
                  ["`int` (integer)", "`$a = 10;`", "liczba całkowita"],
                  [
                    "`float` (double)",
                    "`$b = 3.5;`",
                    "liczba zmiennoprzecinkowa",
                  ],
                  ["`string`", '`$c = "tekst";`', "napis"],
                  [
                    "`bool` (boolean)",
                    "`$d = false;`",
                    "wartość logiczna `true` / `false`",
                  ],
                  ["`array`", "`$e = [1, 2];`", "tablica"],
                  ["`null`", "`$f = null;`", "brak wartości"],
                  ["`object`", "`$g = new Klasa();`", "obiekt"],
                ],
              },
              {
                typ: "h",
                tekst: "Zasady nazw",
              },
              {
                typ: "lista",
                elementy: [
                  "Po `$` musi stać litera lub `_`. Zapis `$1abc` jest błędny.",
                  "Wielkość liter ma znaczenie: `$Imie` i `$imie` to różne zmienne.",
                  "Stałe piszemy bez `$`, zwykle wielkimi literami.",
                ],
              },
              {
                typ: "h",
                tekst: "Sprawdzanie i zmiana typu",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$x = "42";\necho gettype($x);\n$y = (int)$x;\n$z = intval("15 zł");\n$w = floatval("3.75");\nvar_dump(is_int($y));\n?>',
              },
              {
                typ: "p",
                tekst:
                  '`gettype` wypisze `string`. Rzutowanie `(int)` zamienia napis na liczbę. `intval("15 zł")` da `15`. `var_dump` pokaże `bool(true)`.',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: który typ w PHP przechowuje wartości logiczne? Odpowiedź: `boolean` (`bool`).",
              },
            ],
          },
          {
            id: "php-napisy",
            tytul: "Napisy i funkcje tekstowe",
            skrot:
              "Łączenie kropką, cudzysłowy a apostrofy, `strlen`, `strtoupper`, `substr`, `str_replace`, `trim`, `explode`.",
            tresc: [
              {
                typ: "h",
                tekst: "Łączenie napisów",
              },
              {
                typ: "p",
                tekst:
                  "W PHP napisy łączymy **kropką** `.`, a nie plusem. Operator `.=` dopisuje tekst do zmiennej.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$imie = "Jan";\n$nazwisko = "Kowalski";\n$pelne = $imie . " " . $nazwisko;\n$html = "<ul>";\n$html .= "<li>$pelne</li>";\n$html .= "</ul>";\necho $html;\n?>',
              },
              {
                typ: "h",
                tekst: "Cudzysłów kontra apostrof",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$owoc = "jabłko";\necho "Lubię $owoc";\necho \'Lubię $owoc\';\necho "Cena: {$owoc}a jest niska";\n?>',
              },
              {
                typ: "lista",
                elementy: [
                  'W **cudzysłowach** `"…"` zmienne są zamieniane na wartości: `Lubię jabłko`.',
                  "W **apostrofach** `'…'` tekst jest dosłowny: `Lubię $owoc`.",
                  "Klamry `{$zmienna}` oddzielają nazwę zmiennej od dalszego tekstu.",
                  "W cudzysłowach działają też znaki specjalne, np. nowa linia `\\n`.",
                ],
              },
              {
                typ: "h",
                tekst: "Najważniejsze funkcje",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Przykład", "Wynik"],
                wiersze: [
                  ["`strlen($s)`", '`strlen("PHP")`', "`3`"],
                  ["`strtoupper($s)`", '`strtoupper("abc")`', '`"ABC"`'],
                  ["`strtolower($s)`", '`strtolower("ABC")`', '`"abc"`'],
                  ["`ucfirst($s)`", '`ucfirst("anna")`', '`"Anna"`'],
                  [
                    "`substr($s, start, dł)`",
                    '`substr("Informatyk", 0, 4)`',
                    '`"Info"`',
                  ],
                  [
                    "`strpos($s, $szukane)`",
                    '`strpos("Kraków", "a")`',
                    "`2` (brak to `false`)",
                  ],
                  [
                    "`str_replace($co, $na, $s)`",
                    '`str_replace("a", "o", "mama")`',
                    '`"momo"`',
                  ],
                  ["`trim($s)`", '`trim("  tekst  ")`', '`"tekst"`'],
                  [
                    "`explode($sep, $s)`",
                    '`explode(",", "a,b,c")`',
                    'tablica `["a", "b", "c"]`',
                  ],
                  [
                    "`implode($sep, $tab)`",
                    '`implode("-", [1, 2, 3])`',
                    '`"1-2-3"`',
                  ],
                  ["`strrev($s)`", '`strrev("abc")`', '`"cba"`'],
                  ["`str_repeat($s, n)`", '`str_repeat("*", 3)`', '`"***"`'],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$tab = explode(",", "jelenie,sarny,dziki,lisy,borsuki");\necho $tab[1] . " " . $tab[2];\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na ekranie pojawi się `sarny dziki`, bo indeksy liczymy od 0.",
              },
              {
                typ: "uwaga",
                tekst:
                  '`strlen` liczy **bajty**. Polskie litery w UTF-8 zajmują 2 bajty, więc `strlen("ąę")` daje `4`. Liczbę znaków poda `mb_strlen`.',
              },
            ],
          },
          {
            id: "php-operatory",
            tytul: "Operatory",
            skrot:
              "Arytmetyczne, przypisania, porównania (`==`, `===`, `!=`, `<>`), logiczne i operator łączenia `.`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Rodzaj", "Operatory", "Przykład"],
                wiersze: [
                  ["arytmetyczne", "`+ - * / % **`", "`10 % 3` daje `1`"],
                  ["przypisania", "`= += -= *= /= .=`", '`$s .= "x";`'],
                  ["inkrementacja", "`++ --`", "`$i++;`"],
                  [
                    "porównania",
                    "`== === != <> !== < > <= >=`",
                    '`5 == "5"` → `true`',
                  ],
                  ["logiczne", "`&& || ! and or xor`", "`$a && $b`"],
                  ["łączenie napisów", "`.`", '`"a" . "b"`'],
                  ["null coalescing", "`??`", '`$_GET["x"] ?? "brak"`'],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$a = 7;\n$b = 2;\necho $a / $b;\necho "<br>";\necho intdiv($a, $b);\necho "<br>";\necho $a % $b;\necho "<br>";\nvar_dump(5 === "5");\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na ekranie zobaczysz kolejno: `3.5`, `3`, `1` i `bool(false)`. Dzielenie `/` daje wynik z ułamkiem; dzielenie całkowite to `intdiv`.",
              },
              {
                typ: "lista",
                elementy: [
                  "`==` porównuje wartości, `===` wartości i typy.",
                  "`!=` oraz `<>` znaczą to samo: „różne”.",
                  '`$x ?? "domyślne"` zwraca `$x`, jeśli istnieje i nie jest `null`; w przeciwnym razie wartość domyślną.',
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  'Typowy błąd po przejściu z JS: `echo "Suma: " + $a;`. W PHP plus nie łączy tekstów - użyj kropki.',
              },
            ],
          },
        ],
      },
      {
        id: "php-sterowanie",
        tytul: "Instrukcje sterujące i funkcje",
        tematy: [
          {
            id: "php-warunki",
            tytul: "Instrukcje warunkowe",
            skrot: "`if`, `elseif`, `else`, `switch`, operator `?:` i `match`.",
            tresc: [
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$temperatura = 22;\nif ($temperatura < 0) {\n    echo "Mróz";\n} elseif ($temperatura < 20) {\n    echo "Chłodno";\n} else {\n    echo "Ciepło";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na ekranie pojawi się `Ciepło`. W PHP piszemy `elseif` razem (zapis `else if` też działa).",
              },
              {
                typ: "h",
                tekst: "switch",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$ocena = 4;\nswitch ($ocena) {\n    case 6:\n        echo "celujący";\n        break;\n    case 5:\n        echo "bardzo dobry";\n        break;\n    case 4:\n        echo "dobry";\n        break;\n    default:\n        echo "inna ocena";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Wypisze `dobry`. Bez `break` wykonałyby się też kolejne przypadki.",
              },
              {
                typ: "h",
                tekst: "Operator trójargumentowy i match",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wiek = 19;\necho $wiek >= 18 ? "dorosły" : "niepełnoletni";\n$dzien = 6;\n$typ = match($dzien) {\n    6, 7 => "weekend",\n    default => "dzień roboczy",\n};\necho $typ;\n?>',
              },
              {
                typ: "h",
                tekst: "Zagnieżdżone warunki logiczne",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$a = true; $b = false; $c = true; $d = false;\nif ($a && $b) {\n    echo "warunek1";\n} elseif ($a && ($c || $d)) {\n    echo "warunek2";\n} else {\n    echo "warunek3";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Pierwszy warunek jest fałszywy (`$b` to `false`). Drugi jest prawdziwy, bo `$c || $d` daje `true`. Wynik: `warunek2`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania z testu często każą „przeliczyć” zagnieżdżone `if`/`elseif`. Sprawdzaj warunki po kolei i zatrzymaj się na pierwszym prawdziwym.",
              },
            ],
          },
          {
            id: "php-petle",
            tytul: "Pętle",
            skrot:
              "`for`, `while`, `do…while`, `foreach` oraz `break` i `continue`.",
            tresc: [
              {
                typ: "h",
                tekst: "for",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo "<p>Akapit nr $i</p>";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na stronie pojawi się pięć akapitów: od `Akapit nr 1` do `Akapit nr 5`.",
              },
              {
                typ: "h",
                tekst: "while i do…while",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: "<?php\n$licznik = 0;\n$x = 4;\nwhile ($licznik != $x) {\n    echo $licznik;\n    $licznik++;\n}\n?>",
              },
              {
                typ: "p",
                tekst:
                  "Wypisze `0123` - kolejne liczby od 0 do x−1. `while` sprawdza warunek przed obrotem, a `do { } while ();` po obrocie, więc wykona się co najmniej raz.",
              },
              {
                typ: "h",
                tekst: "foreach - przechodzenie po tablicy",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$miasta = ["Warszawa", "Kraków", "Łódź"];\necho "<ol>";\nforeach ($miasta as $miasto) {\n    echo "<li>$miasto</li>";\n}\necho "</ol>";\n\n$ceny = ["chleb" => 5.50, "mleko" => 3.20];\nforeach ($ceny as $produkt => $cena) {\n    echo "$produkt: $cena zł<br>";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Pierwsza pętla tworzy listę numerowaną trzech miast. Druga wypisuje `chleb: 5.5 zł` i `mleko: 3.2 zł`. Zapis `$klucz => $wartosc` daje dostęp do kluczy.",
              },
              {
                typ: "h",
                tekst: "break i continue",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nfor ($i = 1; $i <= 10; $i++) {\n    if ($i % 3 == 0) continue;\n    if ($i == 8) break;\n    echo $i . " ";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Wypisze `1 2 4 5 7`. Liczby podzielne przez 3 są pomijane, a przy 8 pętla się kończy.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: ile razy wykona się `for ($i = 0; $i <= 10; $i += 2)`? Odpowiedź: 6 razy. Inne częste pytanie: która pętla jest równoważna podanej pętli `while` - porównuj wartość startową, warunek i krok.",
              },
            ],
          },
          {
            id: "php-funkcje",
            tytul: "Funkcje własne",
            skrot:
              "Definiowanie funkcji, parametry, wartości domyślne, `return` i zasięg zmiennych.",
            tresc: [
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nfunction brutto($netto, $vat = 23) {\n    return $netto * (1 + $vat / 100);\n}\necho brutto(100);\necho "<br>";\necho brutto(100, 8);\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na ekranie: `123` i `108`. Parametr `$vat` ma wartość domyślną 23, używaną, gdy nie podamy drugiego argumentu.",
              },
              {
                typ: "lista",
                elementy: [
                  "Funkcję definiujemy słowem `function`, nazwy funkcji **nie** zaczynają się od `$`.",
                  "`return` zwraca wynik i kończy funkcję.",
                  "Wielkość liter w nazwach funkcji nie ma znaczenia, ale pisz konsekwentnie.",
                ],
              },
              {
                typ: "h",
                tekst: "Zasięg zmiennych",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: "<?php\n$licznik = 10;\nfunction pokaz() {\n    global $licznik;\n    echo $licznik;\n}\npokaz();\n?>",
              },
              {
                typ: "p",
                tekst:
                  "Zmienne spoza funkcji **nie są** w niej widoczne (inaczej niż w JS). Trzeba użyć `global` albo przekazać wartość parametrem. Tutaj wypisze się `10`.",
              },
              {
                typ: "h",
                tekst: "Typy parametrów i przekazanie przez referencję",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nfunction pole(float $a, float $b): float {\n    return $a * $b;\n}\nfunction podwoj(&$x) {\n    $x = $x * 2;\n}\n$n = 5;\npodwoj($n);\necho pole(2, 3) . " " . $n;\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Wypisze `6 10`. Znak `&` przy parametrze oznacza przekazanie przez referencję - funkcja zmienia oryginalną zmienną.",
              },
            ],
          },
          {
            id: "php-funkcje-wbudowane",
            tytul: "Przydatne funkcje wbudowane",
            skrot:
              "`date`, `rand`, `round`, `isset`, `empty`, `is_numeric`, `number_format`, `header` i inne.",
            tresc: [
              {
                typ: "h",
                tekst: "Data i czas",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\necho date("Y-m-d");\necho "<br>";\necho date("d.m.Y H:i:s");\necho "<br>";\necho date("l");\n?>',
              },
              {
                typ: "tabela",
                naglowki: ["Znak w `date()`", "Znaczenie", "Przykład"],
                wiersze: [
                  ["`Y`", "rok czterocyfrowy", "`2026`"],
                  ["`m`", "miesiąc z zerem", "`03`"],
                  ["`d`", "dzień z zerem", "`07`"],
                  [
                    "`H`, `i`, `s`",
                    "godzina 24h, minuty, sekundy",
                    "`14:05:09`",
                  ],
                  [
                    "`D` / `l`",
                    "skrót / pełna nazwa dnia (angielska)",
                    "`Mon` / `Monday`",
                  ],
                  ["`N`", "numer dnia tygodnia 1-7 (pon = 1)", "`3`"],
                ],
              },
              {
                typ: "p",
                tekst:
                  '`time()` zwraca bieżący znacznik czasu w sekundach. `mktime()` i `strtotime("+1 day")` tworzą inne daty.',
              },
              {
                typ: "h",
                tekst: "Liczby",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie", "Przykład → wynik"],
                wiersze: [
                  [
                    "`rand(min, max)`, `mt_rand(min, max)`",
                    "losowa liczba całkowita z przedziału (włącznie)",
                    "`rand(1, 6)` → np. `4`",
                  ],
                  [
                    "`round($x, n)`",
                    "zaokrąglenie do n miejsc",
                    "`round(3.456, 2)` → `3.46`",
                  ],
                  ["`floor`, `ceil`", "w dół, w górę", "`ceil(4.1)` → `5`"],
                  [
                    "`abs`, `sqrt`, `pow`",
                    "wartość bezwzględna, pierwiastek, potęga",
                    "`pow(2, 3)` → `8`",
                  ],
                  [
                    "`max`, `min`",
                    "największa, najmniejsza",
                    "`max(3, 9, 1)` → `9`",
                  ],
                  [
                    '`number_format($x, 2, ",", " ")`',
                    "formatowanie liczby",
                    "`1 234,50`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Sprawdzanie zmiennych",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Zwraca `true`, gdy…"],
                wiersze: [
                  ["`isset($x)`", "zmienna istnieje i nie jest `null`"],
                  [
                    "`empty($x)`",
                    'zmienna nie istnieje lub jest „pusta”: `""`, `0`, `"0"`, `null`, `false`, `[]`',
                  ],
                  [
                    "`is_numeric($x)`",
                    'wartość jest liczbą lub napisem z liczbą, np. `"12.5"`',
                  ],
                  ["`is_int`, `is_string`, `is_array`", "zmienna ma dany typ"],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wiek = "abc";\nif (!is_numeric($wiek)) {\n    echo "Wiek musi być liczbą";\n}\n$kostka = rand(1, 6);\necho "<p>Wylosowano: $kostka</p>";\n?>',
              },
              {
                typ: "h",
                tekst: "Przekierowanie i zakończenie skryptu",
              },
              {
                typ: "lista",
                elementy: [
                  '`header("Location: index.php");` przekierowuje na inną stronę. Musi być wywołane, zanim cokolwiek zostanie wypisane.',
                  '`exit()` lub `die("komunikat")` kończy skrypt.',
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie: która funkcja sprawdza, czy zmienna została zainicjowana? Odpowiedź: `isset()`.",
              },
            ],
          },
        ],
      },
      {
        id: "php-tablice-dzial",
        tytul: "Tablice",
        tematy: [
          {
            id: "php-tablice",
            tytul: "Tablice indeksowane i asocjacyjne",
            skrot:
              "Tworzenie tablic, indeksy od 0, klucze tekstowe, tablice wielowymiarowe.",
            tresc: [
              {
                typ: "h",
                tekst: "Tablica indeksowana",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$imiona = ["Anna", "Tomasz", "Krzysztof", "Aleksandra"];\n$liczby = array(5, 10, 15);\necho $imiona[2];\n$imiona[] = "Piotr";\necho count($imiona);\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na ekranie: `Krzysztof` i `5`. Zapis `$tab[] = wartość` dodaje element na koniec.",
              },
              {
                typ: "h",
                tekst: "Tablica asocjacyjna",
              },
              {
                typ: "p",
                tekst:
                  "Zamiast numerów używamy **kluczy** tekstowych. Klucz wskazujemy operatorem `=>`.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$osoba = [\n    "imie" => "Ewa",\n    "nazwisko" => "Nowak",\n    "wiek" => 18\n];\necho $osoba["imie"] . " ma " . $osoba["wiek"] . " lat";\n$osoba["miasto"] = "Gdynia";\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Wypisze `Ewa ma 18 lat`. Wiersz pobrany z bazy funkcją `mysqli_fetch_assoc` to właśnie tablica asocjacyjna.",
              },
              {
                typ: "h",
                tekst: "Tablica wielowymiarowa",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$produkty = [\n    ["nazwa" => "Mysz", "cena" => 49],\n    ["nazwa" => "Klawiatura", "cena" => 129]\n];\necho "<table>";\nforeach ($produkty as $p) {\n    echo "<tr><td>{$p[\'nazwa\']}</td><td>{$p[\'cena\']} zł</td></tr>";\n}\necho "</table>";\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Powstanie tabela z dwoma wierszami: Mysz 49 zł i Klawiatura 129 zł.",
              },
              {
                typ: "uwaga",
                tekst:
                  "W cudzysłowach odwołanie do elementu z kluczem tekstowym zapisz w klamrach: `\"{$p['nazwa']}\"`.",
              },
            ],
          },
          {
            id: "php-tablice-funkcje",
            tytul: "Funkcje tablicowe i sortowanie",
            skrot:
              "`count`, `sort`, `rsort`, `asort`, `arsort`, `ksort`, `krsort`, `in_array`, `array_push`, `array_sum` i inne.",
            tresc: [
              {
                typ: "h",
                tekst: "Sortowanie",
              },
              {
                typ: "tabela",
                naglowki: [
                  "Funkcja",
                  "Sortuje",
                  "Kolejność",
                  "Zachowuje klucze",
                ],
                wiersze: [
                  ["`sort()`", "wartości", "rosnąco", "nie (indeksy od nowa)"],
                  ["`rsort()`", "wartości", "malejąco", "nie"],
                  ["`asort()`", "wartości", "rosnąco", "tak"],
                  ["`arsort()`", "wartości", "malejąco", "tak"],
                  ["`ksort()`", "klucze", "rosnąco", "tak"],
                  ["`krsort()`", "klucze", "malejąco", "tak"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Litera `a` oznacza „associative” (zachowuje powiązanie klucz-wartość), `k` - „key” (sortuje po kluczach), `r` - „reverse” (odwrotnie).",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wyniki = ["Ola" => 88, "Adam" => 95, "Ewa" => 72];\narsort($wyniki);\nforeach ($wyniki as $kto => $pkt) {\n    echo "$kto: $pkt<br>";\n}\nksort($wyniki);\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Po `arsort` kolejność to: `Adam: 95`, `Ola: 88`, `Ewa: 72`. Po `ksort` tablica jest ułożona alfabetycznie według imion: Adam, Ewa, Ola.",
              },
              {
                typ: "h",
                tekst: "Inne funkcje",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie"],
                wiersze: [
                  ["`count($t)`", "liczba elementów"],
                  [
                    "`array_push($t, $x)`",
                    "dodaje element na koniec (jak `$t[] = $x`)",
                  ],
                  ["`array_pop($t)`", "usuwa i zwraca ostatni element"],
                  [
                    "`array_shift($t)`, `array_unshift($t, $x)`",
                    "usuwa pierwszy / dodaje na początek",
                  ],
                  [
                    "`in_array($x, $t)`",
                    "czy wartość jest w tablicy (`true`/`false`)",
                  ],
                  [
                    "`array_search($x, $t)`",
                    "klucz znalezionego elementu lub `false`",
                  ],
                  ["`array_key_exists($k, $t)`", "czy klucz istnieje"],
                  ["`array_sum($t)`", "suma elementów"],
                  [
                    "`array_keys($t)`, `array_values($t)`",
                    "tablica kluczy / wartości",
                  ],
                  ["`array_reverse($t)`", "odwrócona kopia"],
                  ["`array_merge($a, $b)`", "połączenie tablic"],
                  ["`unset($t[1])`", "usunięcie elementu"],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$oceny = [4, 5, 3, 5];\narray_push($oceny, 6);\n$srednia = array_sum($oceny) / count($oceny);\necho "Średnia: " . round($srednia, 2);\nif (in_array(6, $oceny)) {\n    echo "<br>Jest szóstka!";\n}\n?>',
              },
              {
                typ: "p",
                tekst: "Na ekranie: `Średnia: 4.6` i `Jest szóstka!`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Bardzo częste pytanie: która funkcja sortuje tablicę asocjacyjną **według kluczy**? Odpowiedź: `ksort()`. Według wartości z zachowaniem kluczy: `asort()`.",
              },
            ],
          },
        ],
      },
      {
        id: "php-formularze-dzial",
        tytul: "Formularze, ciasteczka i sesje",
        tematy: [
          {
            id: "php-formularze",
            tytul: "Obsługa formularzy: $_GET i $_POST",
            skrot:
              "Odbieranie danych z formularza HTML przez tablice superglobalne `$_POST` i `$_GET`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Formularz HTML wysyła dane do skryptu wskazanego w atrybucie `action`, metodą z atrybutu `method`. PHP odbiera je w tablicach **superglobalnych** - dostępnych w każdym miejscu skryptu.",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<form action="zapisz.php" method="post">\n    <input type="text" name="imie">\n    <input type="number" name="wiek">\n    <select name="klasa">\n        <option>1A</option>\n        <option>2B</option>\n    </select>\n    <input type="checkbox" name="newsletter" value="tak">\n    <button type="submit">Wyślij</button>\n</form>',
                tytul: "formularz",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nif (isset($_POST["imie"]) && $_POST["imie"] != "") {\n    $imie = $_POST["imie"];\n    $wiek = $_POST["wiek"];\n    $klasa = $_POST["klasa"];\n    $newsletter = isset($_POST["newsletter"]) ? "tak" : "nie";\n    echo "<p>Witaj $imie ($wiek lat), klasa $klasa, newsletter: $newsletter</p>";\n} else {\n    echo "<p>Uzupełnij imię</p>";\n}\n?>',
                tytul: "zapisz.php",
              },
              {
                typ: "lista",
                elementy: [
                  "Kluczem w `$_POST` jest atrybut **`name`** pola, a nie `id`.",
                  "Niezaznaczony checkbox **nie jest wysyłany** - sprawdzaj go przez `isset`.",
                  "Przy wysyłce przez `GET` dane są widoczne w adresie: `strona.php?imie=Jan&wiek=17`.",
                ],
              },
              {
                typ: "tabela",
                naglowki: ["", "GET", "POST"],
                wiersze: [
                  ["Gdzie są dane", "w adresie URL", "w treści żądania HTTP"],
                  [
                    "Widoczność",
                    "widoczne, można dodać do zakładek",
                    "niewidoczne w adresie",
                  ],
                  ["Limit", "ograniczona długość adresu", "praktycznie brak"],
                  [
                    "Zastosowanie",
                    "wyszukiwanie, filtrowanie, linki",
                    "logowanie, dodawanie danych, hasła",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Inne tablice superglobalne",
              },
              {
                typ: "tabela",
                naglowki: ["Tablica", "Zawartość"],
                wiersze: [
                  ["`$_GET`", "dane z adresu URL"],
                  ["`$_POST`", "dane z formularza wysłanego metodą POST"],
                  ["`$_REQUEST`", "połączenie GET, POST i COOKIE"],
                  [
                    "`$_SERVER`",
                    'informacje o serwerze i żądaniu, np. `$_SERVER["REMOTE_ADDR"]` (IP), `$_SERVER["REQUEST_METHOD"]`, `$_SERVER["PHP_SELF"]`',
                  ],
                  ["`$_COOKIE`", "ciasteczka przesłane przez przeglądarkę"],
                  ["`$_SESSION`", "zmienne sesji"],
                  [
                    "`$_FILES`",
                    'pliki przesłane formularzem (`enctype="multipart/form-data"`)',
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Formularz wysyłany do tej samej strony",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<form method="post">\n    <input type="number" name="a"> + <input type="number" name="b">\n    <button type="submit" name="licz">=</button>\n</form>\n<?php\nif (isset($_POST["licz"])) {\n    $suma = $_POST["a"] + $_POST["b"];\n    echo "<p>Wynik: $suma</p>";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Brak atrybutu `action` oznacza wysłanie do tego samego pliku. Wynik pojawia się pod formularzem dopiero po kliknięciu przycisku.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Na egzaminie formularz często dodaje rekord do bazy. Sprawdź w arkuszu, czy `method` ma być `post`, i nadaj polom `name` - bez tego PHP nie dostanie danych.",
              },
            ],
          },
          {
            id: "php-ciasteczka",
            tytul: "Ciasteczka (cookies)",
            skrot:
              "Tworzenie `setcookie`, odczyt `$_COOKIE` i usuwanie ciasteczka datą z przeszłości.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Ciasteczko to mały plik tekstowy zapisany **w przeglądarce użytkownika**. Przeglądarka odsyła je z każdym żądaniem do serwera. Służy np. do zapamiętania wyboru języka albo liczby odwiedzin.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nsetcookie("owoce", "jabłko", time() + 3600);\nsetcookie("motyw", "ciemny", time() + 60 * 60 * 24 * 30, "/");\n?>',
              },
              {
                typ: "lista",
                elementy: [
                  "Parametry: nazwa, wartość, czas wygaśnięcia (znacznik czasu), opcjonalnie ścieżka.",
                  "`time() + 3600` - wygaśnie za godzinę. `time() + 60*60*24*30` - za 30 dni.",
                  "Bez czasu wygaśnięcia ciasteczko jest sesyjne - znika po zamknięciu przeglądarki.",
                  "`setcookie` musi być wywołane **przed** wypisaniem czegokolwiek, bo wysyła nagłówek HTTP.",
                ],
              },
              {
                typ: "h",
                tekst: "Odczyt i licznik odwiedzin",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nif (isset($_COOKIE["odwiedziny"])) {\n    $ile = $_COOKIE["odwiedziny"] + 1;\n} else {\n    $ile = 1;\n}\nsetcookie("odwiedziny", $ile, time() + 3600 * 24 * 365);\n?>\n<!DOCTYPE html>\n<html lang="pl">\n<body>\n    <p>Odwiedzasz stronę po raz <?php echo $ile; ?></p>\n</body>\n</html>',
              },
              {
                typ: "p",
                tekst:
                  "Przy pierwszej wizycie zobaczysz `Odwiedzasz stronę po raz 1`, przy kolejnych liczba rośnie.",
              },
              {
                typ: "h",
                tekst: "Usuwanie ciasteczka",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nsetcookie("owoce", "", time() - 3600);\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Ustawiamy czas wygaśnięcia w przeszłości. Przeglądarka sama usunie ciasteczko.",
              },
              {
                typ: "egzamin",
                tekst:
                  'Pytania z testu: jak usunąć ciasteczko `ciastko`? Poprawnie: `setcookie("ciastko", "", time() - 3600);`. Funkcje `deletecookie` czy `unsetcookie` **nie istnieją**.',
              },
            ],
          },
          {
            id: "php-sesje",
            tytul: "Sesje",
            skrot:
              "`session_start`, `$_SESSION`, `session_destroy` - zapamiętywanie danych użytkownika po stronie serwera.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Sesja przechowuje dane **na serwerze**. Przeglądarka dostaje tylko identyfikator sesji (ciasteczko `PHPSESSID`). Sesja świetnie nadaje się do zapamiętania zalogowanego użytkownika czy koszyka.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nsession_start();\n$_SESSION["login"] = "jkowalski";\n$_SESSION["koszyk"] = [];\n?>',
                tytul: "logowanie.php",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nsession_start();\nif (isset($_SESSION["login"])) {\n    echo "Zalogowano jako: " . $_SESSION["login"];\n} else {\n    header("Location: logowanie.php");\n    exit();\n}\n?>',
                tytul: "panel.php",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nsession_start();\nsession_unset();\nsession_destroy();\nheader("Location: index.php");\n?>',
                tytul: "wyloguj.php",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie"],
                wiersze: [
                  [
                    "`session_start()`",
                    "rozpoczyna lub wznawia sesję - na początku każdej strony korzystającej z sesji",
                  ],
                  [
                    '`$_SESSION["klucz"] = wartość`',
                    "zapisuje zmienną sesyjną",
                  ],
                  ['`unset($_SESSION["klucz"])`', "usuwa jedną zmienną"],
                  ["`session_unset()`", "czyści wszystkie zmienne sesji"],
                  ["`session_destroy()`", "niszczy sesję na serwerze"],
                  ["`session_id()`", "zwraca identyfikator sesji"],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["", "Ciasteczko", "Sesja"],
                wiersze: [
                  ["Gdzie dane", "przeglądarka", "serwer"],
                  [
                    "Bezpieczeństwo",
                    "użytkownik może je zmienić",
                    "bezpieczniejsza",
                  ],
                  [
                    "Czas życia",
                    "ustawiony w `setcookie`",
                    "zwykle do zamknięcia przeglądarki",
                  ],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "`session_start()` musi być wywołane przed jakimkolwiek wypisaniem HTML, także przed pustą linią przed `<?php`.",
              },
            ],
          },
          {
            id: "php-include",
            tytul: "Dołączanie plików: include i require",
            skrot:
              "`include`, `require`, `include_once`, `require_once` - wspólne fragmenty strony i plik połączenia z bazą.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Gdy wiele stron ma ten sam nagłówek, stopkę lub kod łączenia z bazą, trzymamy go w osobnym pliku i dołączamy.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\nrequire "polaczenie.php";\ninclude "naglowek.php";\n?>\n<main>\n    <p>Treść strony</p>\n</main>\n<?php include "stopka.php"; ?>',
              },
              {
                typ: "tabela",
                naglowki: ["Instrukcja", "Gdy plik nie istnieje"],
                wiersze: [
                  ["`include`", "ostrzeżenie (warning), skrypt działa dalej"],
                  [
                    "`require`",
                    "błąd krytyczny (fatal error), skrypt się zatrzymuje",
                  ],
                  [
                    "`include_once` / `require_once`",
                    "jak wyżej, ale plik dołączany jest najwyżej raz",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$conn = mysqli_connect("localhost", "root", "", "sklep");\n?>',
                tytul: "polaczenie.php",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: czym różni się `require` od `include`? Przy braku pliku `require` przerywa skrypt, a `include` generuje tylko ostrzeżenie.",
              },
            ],
          },
        ],
      },
      {
        id: "php-mysql",
        tytul: "PHP i baza MySQL",
        tematy: [
          {
            id: "php-mysql-polaczenie",
            tytul: "Połączenie z bazą: mysqli_connect",
            skrot:
              "Łączenie z serwerem MySQL funkcją `mysqli_connect`, obsługa błędu i zamknięcie połączenia `mysqli_close`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Na egzaminie używamy rozszerzenia **mysqli** w stylu proceduralnym. Pracę z bazą zawsze dzielimy na etapy: połączenie → zapytanie → przetworzenie wyniku → zamknięcie.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$conn = mysqli_connect("localhost", "root", "", "biblioteka");\nif (!$conn) {\n    die("Błąd połączenia: " . mysqli_connect_error());\n}\nmysqli_set_charset($conn, "utf8");\n\nmysqli_close($conn);\n?>',
              },
              {
                typ: "tabela",
                naglowki: [
                  "Parametr `mysqli_connect`",
                  "Wartość na egzaminie (XAMPP)",
                ],
                wiersze: [
                  ["1. host", '`"localhost"`'],
                  ["2. użytkownik", '`"root"`'],
                  ["3. hasło", '`""` (puste)'],
                  ["4. nazwa bazy", 'z arkusza, np. `"biblioteka"`'],
                ],
              },
              {
                typ: "lista",
                elementy: [
                  "`mysqli_connect` zwraca obiekt połączenia lub `false` przy błędzie.",
                  "`mysqli_connect_errno()` zwraca kod błędu (0, gdy brak błędu), `mysqli_connect_error()` - opis.",
                  '`mysqli_set_charset($conn, "utf8")` zapewnia poprawne polskie znaki.',
                  '`mysqli_select_db($conn, "baza")` pozwala wybrać bazę osobno, jeśli nie podano jej w połączeniu.',
                  "`mysqli_close($conn)` zamyka połączenie na końcu skryptu.",
                ],
              },
              {
                typ: "h",
                tekst: "Wariant z mysqli_connect_errno",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$conn = mysqli_connect("localhost", "root", "", "biblioteka");\nif (mysqli_connect_errno()) {\n    echo "Nie udało się połączyć: " . mysqli_connect_error();\n    exit();\n}\n?>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Arkusz zawsze kończy się zdaniem w stylu „skrypt zamyka połączenie z bazą”. Nie zapomnij o `mysqli_close($conn);` - egzaminator to sprawdza. Kolejność parametrów `mysqli_connect` (host, user, hasło, baza) to też częste pytanie testowe.",
              },
            ],
          },
          {
            id: "php-mysql-select",
            tytul: "Zapytanie SELECT i pętla while",
            skrot:
              "`mysqli_query` wysyła zapytanie, pętla `while` z `mysqli_fetch_array` wypisuje kolejne rekordy.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`mysqli_query($conn, $sql)` wysyła zapytanie. Dla `SELECT` zwraca **obiekt wyniku**, z którego pobieramy wiersze jeden po drugim. Gdy wierszy zabraknie, funkcja pobierająca zwraca `null`, a pętla `while` się kończy.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$conn = mysqli_connect("localhost", "root", "", "biblioteka");\n$sql = "SELECT tytul, autor, rok FROM ksiazki ORDER BY rok DESC;";\n$wynik = mysqli_query($conn, $sql);\n\necho "<table>";\necho "<tr><th>Tytuł</th><th>Autor</th><th>Rok</th></tr>";\nwhile ($wiersz = mysqli_fetch_array($wynik)) {\n    echo "<tr>";\n    echo "<td>" . $wiersz["tytul"] . "</td>";\n    echo "<td>" . $wiersz["autor"] . "</td>";\n    echo "<td>" . $wiersz["rok"] . "</td>";\n    echo "</tr>";\n}\necho "</table>";\n\nmysqli_close($conn);\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Na stronie pojawi się tabela z nagłówkiem i jednym wierszem na każdą książkę z bazy, od najnowszej.",
              },
              {
                typ: "h",
                tekst: "Wypisywanie w listę i w bloki",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wynik = mysqli_query($conn, "SELECT nazwa, cena, zdjecie FROM produkty;");\necho "<ul>";\nwhile ($w = mysqli_fetch_assoc($wynik)) {\n    echo "<li>{$w[\'nazwa\']} - {$w[\'cena\']} zł</li>";\n}\necho "</ul>";\n\n$wynik = mysqli_query($conn, "SELECT nazwa, cena, zdjecie FROM produkty;");\nwhile ($w = mysqli_fetch_assoc($wynik)) {\n    echo "<div class=\'produkt\'>";\n    echo "<img src=\'{$w[\'zdjecie\']}\' alt=\'{$w[\'nazwa\']}\'>";\n    echo "<h4>{$w[\'nazwa\']}</h4>";\n    echo "<p>Cena: {$w[\'cena\']} zł</p>";\n    echo "</div>";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Pierwsza pętla tworzy listę punktowaną produktów. Druga generuje dla każdego produktu osobny blok z obrazem, nagłówkiem i ceną.",
              },
              {
                typ: "h",
                tekst: "Jeden wynik (np. COUNT, AVG)",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wynik = mysqli_query($conn, "SELECT COUNT(*) FROM ksiazki;");\n$w = mysqli_fetch_row($wynik);\necho "Liczba książek: " . $w[0];\n?>',
              },
              {
                typ: "uwaga",
                tekst:
                  "W PHP napis z zapytaniem zapisuj w cudzysłowach, a wartości tekstowe w SQL w apostrofach: `\"SELECT * FROM klienci WHERE miasto = 'Poznań'\"`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Zapytania SQL przepisuj z arkusza - to zwykle te same, które wcześniej przygotowałeś w zadaniu z bazą. Wyniki wypisuj dokładnie w znacznikach z polecenia (lista, tabela, blok, akapit).",
              },
            ],
          },
          {
            id: "php-mysql-pobieranie",
            tytul: "Funkcje pobierające wiersze i liczba rekordów",
            skrot:
              "Różnice `mysqli_fetch_row`, `mysqli_fetch_assoc`, `mysqli_fetch_array` oraz `mysqli_num_rows` i `mysqli_affected_rows`.",
            tresc: [
              {
                typ: "tabela",
                naglowki: [
                  "Funkcja",
                  "Zwraca wiersz jako",
                  "Dostęp do kolumny",
                ],
                wiersze: [
                  [
                    "`mysqli_fetch_row($w)`",
                    "tablicę indeksowaną numerami",
                    "`$r[0]`, `$r[1]`",
                  ],
                  [
                    "`mysqli_fetch_assoc($w)`",
                    "tablicę asocjacyjną (nazwy kolumn)",
                    '`$r["imie"]`',
                  ],
                  [
                    "`mysqli_fetch_array($w)`",
                    "obie naraz (domyślnie `MYSQLI_BOTH`)",
                    '`$r[0]` lub `$r["imie"]`',
                  ],
                  ["`mysqli_fetch_object($w)`", "obiekt", "`$r->imie`"],
                  [
                    "`mysqli_fetch_all($w, MYSQLI_ASSOC)`",
                    "tablicę wszystkich wierszy",
                    '`$wszystkie[0]["imie"]`',
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wynik = mysqli_query($conn, "SELECT imie, nazwisko FROM uczniowie;");\nwhile ($r = mysqli_fetch_row($wynik)) {\n    echo "<p>$r[0] $r[1]</p>";\n}\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Dla każdego ucznia pojawi się akapit z imieniem i nazwiskiem. Indeksy odpowiadają kolejności kolumn w `SELECT`.",
              },
              {
                typ: "uwaga",
                tekst:
                  'Klucze w `mysqli_fetch_assoc` to nazwy kolumn **dokładnie** tak, jak są w wyniku. Jeśli w SQL użyjesz aliasu, np. `AVG(cena) AS srednia`, odwołujesz się przez `$r["srednia"]`.',
              },
              {
                typ: "h",
                tekst: "Liczba wierszy",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Kiedy używać", "Zwraca"],
                wiersze: [
                  [
                    "`mysqli_num_rows($wynik)`",
                    "po `SELECT`",
                    "liczbę zwróconych wierszy",
                  ],
                  [
                    "`mysqli_affected_rows($conn)`",
                    "po `INSERT`, `UPDATE`, `DELETE`",
                    "liczbę zmienionych wierszy",
                  ],
                  [
                    "`mysqli_insert_id($conn)`",
                    "po `INSERT`",
                    "id dodanego rekordu (AUTO_INCREMENT)",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$login = "anna";\n$wynik = mysqli_query($conn, "SELECT id FROM uzytkownicy WHERE login = \'$login\';");\nif (mysqli_num_rows($wynik) > 0) {\n    echo "Taki login już istnieje";\n} else {\n    echo "Login wolny";\n}\n?>',
              },
              {
                typ: "h",
                tekst: "Obsługa błędu zapytania",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$wynik = mysqli_query($conn, $sql);\nif (!$wynik) {\n    echo "Błąd zapytania: " . mysqli_error($conn);\n}\n?>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: która funkcja zwraca liczbę wierszy w wyniku zapytania SELECT? Odpowiedź: `mysqli_num_rows`. Która zwraca wiersz jako tablicę indeksowaną numerycznie? `mysqli_fetch_row`.",
              },
            ],
          },
          {
            id: "php-mysql-modyfikacja",
            tytul: "INSERT, UPDATE i DELETE z formularza",
            skrot:
              "Dodawanie, zmiana i usuwanie rekordów na podstawie danych z `$_POST`.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Dla zapytań modyfikujących `mysqli_query` zwraca `true` (sukces) lub `false` (błąd). Nie ma tu pętli - nie ma czego pobierać.",
              },
              {
                typ: "h",
                tekst: "Dodanie rekordu z formularza",
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<form action="dodaj.php" method="post">\n    <label>Imię: <input type="text" name="imie"></label>\n    <label>Nazwisko: <input type="text" name="nazwisko"></label>\n    <label>E-mail: <input type="email" name="email"></label>\n    <button type="submit">Zapisz</button>\n</form>',
                tytul: "formularz",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$conn = mysqli_connect("localhost", "root", "", "szkola");\n\nif (!empty($_POST["imie"]) && !empty($_POST["nazwisko"])) {\n    $imie = $_POST["imie"];\n    $nazwisko = $_POST["nazwisko"];\n    $email = $_POST["email"];\n    $sql = "INSERT INTO uczniowie (imie, nazwisko, email) VALUES (\'$imie\', \'$nazwisko\', \'$email\');";\n    if (mysqli_query($conn, $sql)) {\n        echo "<p>Dodano ucznia: $imie $nazwisko</p>";\n    } else {\n        echo "<p>Błąd: " . mysqli_error($conn) . "</p>";\n    }\n} else {\n    echo "<p>Uzupełnij wszystkie pola</p>";\n}\n\nmysqli_close($conn);\n?>',
                tytul: "dodaj.php",
              },
              {
                typ: "p",
                tekst:
                  "Po wysłaniu wypełnionego formularza w tabeli `uczniowie` pojawi się nowy rekord, a na stronie komunikat `Dodano ucznia: …`.",
              },
              {
                typ: "h",
                tekst: "Aktualizacja i usuwanie",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$id = (int)$_POST["id"];\n$cena = (float)$_POST["cena"];\nmysqli_query($conn, "UPDATE produkty SET cena = $cena WHERE id = $id;");\necho "Zmieniono rekordów: " . mysqli_affected_rows($conn);\n\nmysqli_query($conn, "DELETE FROM produkty WHERE id = $id;");\n?>',
              },
              {
                typ: "uwaga",
                tekst:
                  "Nigdy nie wykonuj `UPDATE` ani `DELETE` bez `WHERE` - zmienisz lub usuniesz wszystkie rekordy tabeli.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Wklejanie `$_POST` prosto do SQL jest niebezpieczne (SQL Injection). Na egzaminie wystarcza zwykle zapis jak wyżej, ale w prawdziwej aplikacji użyj zabezpieczeń z działu „Bezpieczeństwo”. Rzutowanie `(int)` dobrze chroni pola liczbowe.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe polecenie: „skrypt dodaje do tabeli rekord z danymi z formularza; pole id jest uzupełniane automatycznie”. Pomijasz wtedy kolumnę `id` w `INSERT` - ustawi ją `AUTO_INCREMENT`.",
              },
            ],
          },
          {
            id: "php-mysql-skrypt",
            tytul: "Skrypt egzaminacyjny krok po kroku",
            skrot:
              "Kompletny typowy skrypt z arkusza INF.03: połączenie, dwa zapytania, wypisanie wyników, formularz dodający rekord, zamknięcie.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Przykładowe polecenie:** Strona `wedkowanie.php` korzysta z bazy `wedkowanie`. W bloku lewym skrypt nr 1 wysyła zapytanie 1 (nazwa i akwen łowisk z województwa pomorskiego) i dla każdego rekordu wypisuje element listy numerowanej w formacie „nazwa pływa w akwen”. W bloku prawym skrypt nr 2 wysyła zapytanie 2 (imię, nazwisko i liczba połowów wędkarzy) i wypisuje wiersze tabeli. Pod tabelą formularz dodaje nowe zgłoszenie (data, łowisko) zapytaniem 3. Każdy skrypt łączy się z bazą i zamyka połączenie.",
              },
              {
                typ: "h",
                tekst: "Plan działania",
              },
              {
                typ: "kroki",
                elementy: [
                  "Sprawdź w phpMyAdmin, że baza i tabele istnieją, a zapytania z zadania SQL działają.",
                  "Zapisz stronę z rozszerzeniem `.php` w folderze `htdocs`.",
                  "W miejscu bloku wstaw `<?php ?>` i połącz się przez `mysqli_connect`.",
                  "Zapisz zapytanie w zmiennej i wyślij `mysqli_query`.",
                  "W pętli `while` z `mysqli_fetch_array` wypisz każdy rekord w wymaganych znacznikach.",
                  "Obsłuż formularz: sprawdź `isset($_POST[…])`, zbuduj `INSERT`, wyślij.",
                  "Zamknij połączenie `mysqli_close`.",
                  "Otwórz stronę przez `localhost` i sprawdź wynik oraz rekord w phpMyAdmin.",
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n    <meta charset="UTF-8">\n    <title>Wędkowanie</title>\n    <link rel="stylesheet" href="styl.css">\n</head>\n<body>\n    <header>\n        <h1>Portal dla wędkarzy</h1>\n    </header>\n    <section id="lewy">\n        <h3>Łowiska w województwie pomorskim</h3>\n        <ol>\n<?php\n$conn = mysqli_connect("localhost", "root", "", "wedkowanie");\n$sql = "SELECT nazwa, akwen FROM lowisko WHERE wojewodztwo = \'pomorskie\';";\n$wynik = mysqli_query($conn, $sql);\nwhile ($w = mysqli_fetch_array($wynik)) {\n    echo "<li>" . $w["nazwa"] . " pływa w " . $w["akwen"] . "</li>";\n}\nmysqli_close($conn);\n?>\n        </ol>\n    </section>\n    <section id="prawy">\n        <h3>Wędkarze</h3>\n        <table>\n            <tr><th>Imię</th><th>Nazwisko</th><th>Połowy</th></tr>\n<?php\n$conn = mysqli_connect("localhost", "root", "", "wedkowanie");\n$sql = "SELECT imie, nazwisko, COUNT(polow.id) AS ile FROM wedkarz JOIN polow ON polow.wedkarz_id = wedkarz.id GROUP BY wedkarz.id;";\n$wynik = mysqli_query($conn, $sql);\nwhile ($w = mysqli_fetch_array($wynik)) {\n    echo "<tr><td>{$w[\'imie\']}</td><td>{$w[\'nazwisko\']}</td><td>{$w[\'ile\']}</td></tr>";\n}\nmysqli_close($conn);\n?>\n        </table>\n        <form action="wedkowanie.php" method="post">\n            <label>Data: <input type="date" name="data"></label>\n            <label>Łowisko (id): <input type="number" name="lowisko"></label>\n            <button type="submit">Dodaj zgłoszenie</button>\n        </form>\n<?php\nif (!empty($_POST["data"]) && !empty($_POST["lowisko"])) {\n    $conn = mysqli_connect("localhost", "root", "", "wedkowanie");\n    $data = $_POST["data"];\n    $lowisko = (int)$_POST["lowisko"];\n    $sql = "INSERT INTO zgloszenia (data_zgloszenia, lowisko_id) VALUES (\'$data\', $lowisko);";\n    mysqli_query($conn, $sql);\n    echo "<p>Dodano zgłoszenie</p>";\n    mysqli_close($conn);\n}\n?>\n    </section>\n    <footer>\n        <p>Stronę wykonał: 00000000000</p>\n    </footer>\n</body>\n</html>',
                tytul: "wedkowanie.php",
              },
              {
                typ: "h",
                tekst: "Co zobaczysz na ekranie",
              },
              {
                typ: "lista",
                elementy: [
                  "W lewym bloku listę numerowaną, np. `1. Zalew Mały pływa w Wisła`.",
                  "W prawym bloku tabelę z nagłówkiem i wierszami wędkarzy wraz z liczbą połowów.",
                  "Po wysłaniu formularza komunikat `Dodano zgłoszenie` i nowy rekord w tabeli `zgloszenia`.",
                  "Kod PHP nie jest widoczny w źródle strony - tylko wygenerowany HTML.",
                ],
              },
              {
                typ: "h",
                tekst: "Lista kontrolna przed oddaniem",
              },
              {
                typ: "lista",
                elementy: [
                  "Rozszerzenie pliku `.php` i otwarcie przez `http://localhost/…`.",
                  "Nazwy bazy, tabel i kolumn **dokładnie** jak w bazie (wielkość liter, polskie znaki).",
                  "Formaty wypisywanych danych dokładnie jak w arkuszu (spacje, dwukropki, jednostki).",
                  "Każdy skrypt zamyka połączenie `mysqli_close`.",
                  'Formularz ma `method="post"`, a pola mają `name` zgodne z `$_POST`.',
                  "Brak błędów PHP na stronie (komunikaty `Warning`, `Fatal error`).",
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  'Częsty błąd: wpisanie wyników poza znacznikiem listy lub tabeli. `echo "<li>…"` musi być **wewnątrz** `<ol>…</ol>`, dlatego blok PHP stoi między otwarciem a zamknięciem listy.',
              },
              {
                typ: "egzamin",
                tekst:
                  "Dopuszczalne jest jedno połączenie na całą stronę, otwarte na górze i zamknięte na dole. Arkusz często jednak opisuje każdy skrypt osobno („skrypt łączy się…, wysyła…, zamyka połączenie”) - bezpiecznie jest zrobić tak, jak w poleceniu.",
              },
            ],
          },
        ],
      },
      {
        id: "php-bezpieczenstwo-dzial",
        tytul: "Bezpieczeństwo i PDO",
        tematy: [
          {
            id: "php-bezpieczenstwo",
            tytul: "Bezpieczeństwo: XSS, SQL Injection, hasła",
            skrot:
              "`htmlspecialchars`, `mysqli_real_escape_string`, zapytania przygotowane i `password_hash`.",
            tresc: [
              {
                typ: "h",
                tekst: "XSS - wstrzykiwanie kodu HTML/JS",
              },
              {
                typ: "p",
                tekst:
                  "Jeżeli wypiszesz na stronie tekst od użytkownika bez obróbki, ktoś może wpisać `<script>` i uruchomić własny kod u innych osób. Chroni przed tym `htmlspecialchars`, który zamienia znaki specjalne na encje, np. `<` na `&lt;`.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$komentarz = htmlspecialchars($_POST["komentarz"]);\necho "<p>$komentarz</p>";\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Gdy ktoś wpisze `<b>hej</b>`, na stronie zobaczysz dosłownie ten tekst ze znacznikami, a nie pogrubienie. Podobnie działa `strip_tags`, który usuwa znaczniki.",
              },
              {
                typ: "h",
                tekst: "SQL Injection",
              },
              {
                typ: "p",
                tekst:
                  "Atakujący wpisuje do formularza fragment SQL, np. `' OR '1'='1`, który zmienia sens zapytania. Ochrona:",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$login = mysqli_real_escape_string($conn, $_POST["login"]);\n$sql = "SELECT * FROM uzytkownicy WHERE login = \'$login\';";\n?>',
              },
              {
                typ: "p",
                tekst:
                  "`mysqli_real_escape_string` poprzedza apostrofy i inne niebezpieczne znaki ukośnikiem. Najlepsze rozwiązanie to jednak **zapytania przygotowane** (prepared statements):",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$stmt = mysqli_prepare($conn, "INSERT INTO uczniowie (imie, wiek) VALUES (?, ?)");\nmysqli_stmt_bind_param($stmt, "si", $_POST["imie"], $_POST["wiek"]);\nmysqli_stmt_execute($stmt);\nmysqli_stmt_close($stmt);\n?>',
              },
              {
                typ: "lista",
                elementy: [
                  "Znaki `?` to miejsca na dane. Dane nigdy nie są doklejane do treści SQL.",
                  "W `bind_param` typy podajemy literami: `s` - string, `i` - integer, `d` - double.",
                ],
              },
              {
                typ: "h",
                tekst: "Hasła",
              },
              {
                typ: "p",
                tekst:
                  "Haseł nie zapisujemy w bazie jawnym tekstem. Funkcja `password_hash` tworzy bezpieczny skrót z solą, a `password_verify` sprawdza hasło przy logowaniu.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$hash = password_hash($_POST["haslo"], PASSWORD_DEFAULT);\nmysqli_query($conn, "INSERT INTO konta (login, haslo) VALUES (\'ola\', \'$hash\');");\n\nif (password_verify($_POST["haslo"], $hashZBazy)) {\n    echo "Zalogowano";\n} else {\n    echo "Błędne hasło";\n}\n?>',
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Ochrona przed / cel"],
                wiersze: [
                  [
                    "`htmlspecialchars()`",
                    "XSS - bezpieczne wypisanie tekstu w HTML",
                  ],
                  ["`strip_tags()`", "usunięcie znaczników HTML"],
                  [
                    "`mysqli_real_escape_string()`",
                    "SQL Injection - zabezpieczenie znaków w zapytaniu",
                  ],
                  [
                    "`mysqli_prepare()` + `bind_param`",
                    "SQL Injection - najlepsza metoda",
                  ],
                  [
                    "`password_hash()` / `password_verify()`",
                    "bezpieczne przechowywanie haseł",
                  ],
                  [
                    "`md5()`, `sha1()`",
                    "stare skróty - **nie** nadają się do haseł",
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania z testu: która funkcja chroni przed SQL Injection (`mysqli_real_escape_string`), która zamienia znaki specjalne HTML na encje (`htmlspecialchars`). Walidacja w JS nie wystarcza - dane zawsze sprawdzamy też w PHP.",
              },
            ],
          },
          {
            id: "php-pdo",
            tytul: "PDO - alternatywa dla mysqli",
            skrot:
              "Obiektowy interfejs PDO działa z wieloma bazami i wspiera zapytania przygotowane.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**PDO** (PHP Data Objects) to obiektowy sposób łączenia z bazą. Działa nie tylko z MySQL, ale też z PostgreSQL, SQLite i innymi. Na egzaminie praktycznym zwykle wystarczy mysqli, ale PDO pojawia się w pytaniach testowych.",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\ntry {\n    $pdo = new PDO("mysql:host=localhost;dbname=sklep;charset=utf8", "root", "");\n    $stmt = $pdo->prepare("SELECT nazwa, cena FROM produkty WHERE cena < ?");\n    $stmt->execute([100]);\n    while ($w = $stmt->fetch(PDO::FETCH_ASSOC)) {\n        echo "<p>{$w[\'nazwa\']}: {$w[\'cena\']} zł</p>";\n    }\n} catch (PDOException $e) {\n    echo "Błąd: " . $e->getMessage();\n}\n$pdo = null;\n?>',
              },
              {
                typ: "p",
                tekst:
                  "Dla każdego produktu tańszego niż 100 zł pojawi się akapit z nazwą i ceną. Połączenie zamykamy, przypisując `null`.",
              },
              {
                typ: "tabela",
                naglowki: ["", "mysqli (proceduralnie)", "PDO"],
                wiersze: [
                  ["Bazy danych", "tylko MySQL / MariaDB", "wiele systemów"],
                  ["Styl", "funkcje `mysqli_…` lub obiekty", "tylko obiektowy"],
                  [
                    "Połączenie",
                    "`mysqli_connect(...)`",
                    "`new PDO(dsn, user, hasło)`",
                  ],
                  [
                    "Zapytanie",
                    "`mysqli_query($conn, $sql)`",
                    "`$pdo->query($sql)`",
                  ],
                  [
                    "Pobieranie wiersza",
                    "`mysqli_fetch_assoc($w)`",
                    "`$stmt->fetch()`",
                  ],
                  ["Błędy", "`mysqli_error($conn)`", "wyjątki `PDOException`"],
                ],
              },
              {
                typ: "h",
                tekst: "mysqli w stylu obiektowym",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: '<?php\n$conn = new mysqli("localhost", "root", "", "sklep");\n$wynik = $conn->query("SELECT nazwa FROM produkty;");\nwhile ($w = $wynik->fetch_assoc()) {\n    echo $w["nazwa"] . "<br>";\n}\n$conn->close();\n?>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Stare funkcje `mysql_connect`, `mysql_query` (bez „i”) zostały usunięte w PHP 7. W odpowiedziach testowych traktuj je jako przestarzałe.",
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        pytanie: "Kod PHP jest wykonywany:",
        odpowiedzi: [
          "po stronie serwera",
          "w przeglądarce użytkownika",
          "w bazie danych",
          "przez system operacyjny klienta",
        ],
        poprawna: 0,
        wyjasnienie:
          "PHP przetwarza serwer (np. Apache), a do przeglądarki trafia gotowy HTML.",
      },
      {
        pytanie: "Która nazwa zmiennej w PHP jest poprawna?",
        odpowiedzi: ["`$1liczba`", "`$liczba_1`", "`liczba1`", "`$liczba-1`"],
        poprawna: 1,
        wyjasnienie:
          "Zmienna zaczyna się od `$`, po nim litera lub `_`. Myślnik jest niedozwolony.",
      },
      {
        pytanie: "Który operator w PHP służy do łączenia napisów?",
        odpowiedzi: ["`+`", "`&`", "`.`", "`,`"],
        poprawna: 2,
        wyjasnienie: "Napisy w PHP łączymy kropką, np. `$a . $b`.",
      },
      {
        pytanie:
          "Co wyświetli kod: `$imiona = array('Anna', 'Tomasz', 'Krzysztof', 'Aleksandra'); echo $imiona[2];`?",
        odpowiedzi: ["Anna", "Tomasz", "Aleksandra", "Krzysztof"],
        poprawna: 3,
        wyjasnienie:
          "Indeksy zaczynają się od 0, więc indeks 2 to trzeci element.",
      },
      {
        pytanie: "Która funkcja sortuje tablicę asocjacyjną według kluczy?",
        odpowiedzi: ["`ksort()`", "`sort()`", "`asort()`", "`rsort()`"],
        poprawna: 0,
        wyjasnienie:
          "`ksort` sortuje po kluczach rosnąco. `asort` sortuje po wartościach z zachowaniem kluczy.",
      },
      {
        pytanie: "Jak usunąć w PHP ciasteczko o nazwie `ciastko`?",
        odpowiedzi: [
          '`deletecookie("ciastko");`',
          '`setcookie("ciastko", "", time() - 3600);`',
          '`unsetcookie("ciastko");`',
          '`setcookie("$ciastko", "", 0);`',
        ],
        poprawna: 1,
        wyjasnienie:
          "Ciasteczko usuwamy, ustawiając datę wygaśnięcia w przeszłości.",
      },
      {
        pytanie:
          "Która instrukcja utworzy ciasteczko `owoce` z wartością `jabłko`, ważne przez godzinę?",
        odpowiedzi: [
          '`cookie("owoce", "jabłko", 3600);`',
          '`setcookie("jabłko", "owoce", time() + 3600);`',
          '`setcookie("owoce", "jabłko", time() + 3600);`',
          '`setcookie("owoce", "jabłko", 3600);`',
        ],
        poprawna: 2,
        wyjasnienie:
          "Kolejność parametrów: nazwa, wartość, czas wygaśnięcia jako znacznik czasu `time() + 3600`.",
      },
      {
        pytanie:
          'Wynikiem kodu `$tab = explode(",", "jelenie,sarny,dziki,lisy"); echo $tab[1] . " " . $tab[2];` będzie:',
        odpowiedzi: [
          "jelenie sarny",
          "dziki lisy",
          "lisy dziki",
          "sarny dziki",
        ],
        poprawna: 3,
        wyjasnienie:
          "`explode` dzieli napis po przecinkach. Indeks 1 to „sarny”, indeks 2 to „dziki”.",
      },
      {
        pytanie:
          "Dany jest kod `$licznik = 0; while ($licznik != $x) { echo $licznik; $licznik++; }`, gdzie `$x` jest dodatnią liczbą naturalną. Co wypisze skrypt?",
        odpowiedzi: [
          "kolejne liczby od 0 do x-1",
          "liczby od x do 0",
          "liczby losowe z przedziału (0, x)",
          "tylko liczbę x",
        ],
        poprawna: 0,
        wyjasnienie:
          "Pętla zaczyna od 0 i kończy się, gdy licznik osiągnie wartość `$x`, której już nie wypisuje.",
      },
      {
        pytanie: "Ile razy wykona się pętla `for ($i = 0; $i <= 10; $i += 2)`?",
        odpowiedzi: ["5", "6", "10", "11"],
        poprawna: 1,
        wyjasnienie: "Wartości `$i`: 0, 2, 4, 6, 8, 10 - razem 6 obrotów.",
      },
      {
        pytanie:
          "Która funkcja PHP nawiązuje połączenie z bazą MySQL przy użyciu rozszerzenia mysqli?",
        odpowiedzi: [
          "`mysqli_query()`",
          "`mysqli_open()`",
          "`mysqli_connect()`",
          "`mysql_db()`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`mysqli_connect(host, użytkownik, hasło, baza)` otwiera połączenie z serwerem bazy.",
      },
      {
        pytanie:
          "Jaka jest poprawna kolejność parametrów funkcji `mysqli_connect`?",
        odpowiedzi: [
          "baza, host, użytkownik, hasło",
          "użytkownik, hasło, host, baza",
          "host, baza, użytkownik, hasło",
          "host, użytkownik, hasło, baza",
        ],
        poprawna: 3,
        wyjasnienie: 'Np. `mysqli_connect("localhost", "root", "", "sklep")`.',
      },
      {
        pytanie: "Funkcja `mysqli_fetch_row()` zwraca wiersz wyniku jako:",
        odpowiedzi: [
          "tablicę indeksowaną numerycznie",
          "tablicę asocjacyjną",
          "obiekt",
          "napis",
        ],
        poprawna: 0,
        wyjasnienie:
          "W `mysqli_fetch_row` do kolumn odwołujemy się numerami: `$r[0]`, `$r[1]`.",
      },
      {
        pytanie:
          "Która funkcja zwraca liczbę wierszy w wyniku zapytania SELECT?",
        odpowiedzi: [
          "`mysqli_affected_rows()`",
          "`mysqli_num_rows()`",
          "`mysqli_count()`",
          "`mysqli_fetch_lengths()`",
        ],
        poprawna: 1,
        wyjasnienie:
          "`mysqli_num_rows($wynik)` podaje liczbę zwróconych rekordów. `mysqli_affected_rows` dotyczy INSERT/UPDATE/DELETE.",
      },
      {
        pytanie:
          'Który zapis odbierze w PHP wartość pola `<input name="login">` z formularza wysłanego metodą POST?',
        odpowiedzi: [
          '`$POST["login"]`',
          '`$_GET["login"]`',
          '`$_POST["login"]`',
          '`$_POST["#login"]`',
        ],
        poprawna: 2,
        wyjasnienie:
          "Dane z metody POST trafiają do tablicy superglobalnej `$_POST`, kluczem jest atrybut `name`.",
      },
      {
        pytanie:
          "Która instrukcja musi zostać wywołana, zanim skorzystamy z tablicy `$_SESSION`?",
        odpowiedzi: [
          "`session_open()`",
          "`session_create()`",
          "`setcookie()`",
          "`session_start()`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`session_start()` rozpoczyna lub wznawia sesję i musi stać przed wypisaniem treści.",
      },
      {
        pytanie: "Co wypisze kod `$owoc = \"gruszka\"; echo 'Mam $owoc';`?",
        odpowiedzi: ["`Mam $owoc`", "`Mam gruszka`", "`Mam`", "błąd składni"],
        poprawna: 0,
        wyjasnienie:
          "W apostrofach zmienne nie są zamieniane na wartości - tekst wypisywany jest dosłownie.",
      },
      {
        pytanie: "Funkcja `isset($x)` zwraca `true`, gdy:",
        odpowiedzi: [
          "zmienna jest pusta",
          "zmienna istnieje i nie ma wartości `null`",
          "zmienna jest liczbą",
          "zmienna jest tablicą",
        ],
        poprawna: 1,
        wyjasnienie:
          "`isset` sprawdza, czy zmienna została zainicjowana wartością różną od `null`.",
      },
      {
        pytanie:
          "Czym różni się `require` od `include` przy braku dołączanego pliku?",
        odpowiedzi: [
          "`include` zatrzymuje skrypt, a `require` daje ostrzeżenie",
          "nie ma różnicy",
          "`require` zatrzymuje skrypt błędem krytycznym, a `include` generuje ostrzeżenie",
          "`require` tworzy brakujący plik",
        ],
        poprawna: 2,
        wyjasnienie:
          "`require` przy braku pliku kończy działanie skryptu, `include` pozwala mu działać dalej.",
      },
      {
        pytanie:
          "Która funkcja zamienia znaki specjalne HTML, np. `<` i `>`, na encje i chroni przed XSS?",
        odpowiedzi: [
          "`strip_slashes()`",
          "`addslashes()`",
          "`md5()`",
          "`htmlspecialchars()`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`htmlspecialchars` zamienia m.in. `<` na `&lt;`, dzięki czemu wpisany kod nie zostanie wykonany.",
      },
      {
        pytanie:
          "Która funkcja służy do bezpiecznego haszowania hasła przed zapisaniem w bazie?",
        odpowiedzi: [
          "`password_hash()`",
          "`crypt_text()`",
          "`base64_encode()`",
          "`str_rot13()`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`password_hash` tworzy bezpieczny skrót z solą, a `password_verify` sprawdza hasło.",
      },
      {
        pytanie: "Funkcja `count($tablica)` w PHP zwraca:",
        odpowiedzi: [
          "sumę elementów tablicy",
          "liczbę elementów tablicy",
          "największy element",
          "indeks ostatniego elementu",
        ],
        poprawna: 1,
        wyjasnienie: "`count` podaje liczbę elementów. Sumę liczy `array_sum`.",
      },
      {
        pytanie: "Która funkcja zwraca długość napisu w PHP?",
        odpowiedzi: ["`length()`", "`count()`", "`strlen()`", "`size()`"],
        poprawna: 2,
        wyjasnienie:
          "`strlen` zwraca liczbę bajtów napisu. Dla polskich znaków dokładną liczbę znaków poda `mb_strlen`.",
      },
      {
        pytanie: 'Co zwróci `date("Y")`?',
        odpowiedzi: [
          "dzień tygodnia",
          "numer miesiąca",
          "godzinę",
          "rok zapisany czterema cyframi",
        ],
        poprawna: 3,
        wyjasnienie:
          "Litera `Y` w formacie `date()` oznacza pełny rok, np. 2026.",
      },
      {
        pytanie:
          "Zapytanie `INSERT` wykonane funkcją `mysqli_query()` zwraca przy powodzeniu:",
        odpowiedzi: [
          "`true`",
          "obiekt wyniku z wierszami",
          "liczbę dodanych wierszy",
          "identyfikator nowego rekordu",
        ],
        poprawna: 0,
        wyjasnienie:
          "Dla INSERT, UPDATE i DELETE `mysqli_query` zwraca `true` lub `false`. Liczbę zmian poda `mysqli_affected_rows`.",
      },
      {
        pytanie:
          "W pętli `while ($w = mysqli_fetch_assoc($wynik))` dostęp do kolumny `nazwisko` uzyskamy zapisem:",
        odpowiedzi: [
          "`$w[nazwisko()]`",
          '`$w["nazwisko"]`',
          '`$wynik["nazwisko"]`',
          '`$w->["nazwisko"]`',
        ],
        poprawna: 1,
        wyjasnienie:
          "`mysqli_fetch_assoc` zwraca tablicę asocjacyjną z nazwami kolumn jako kluczami.",
      },
      {
        pytanie: "Funkcja `mysqli_close($conn)` służy do:",
        odpowiedzi: [
          "usunięcia bazy danych",
          "wyczyszczenia tabeli",
          "zamknięcia połączenia z bazą",
          "zakończenia sesji użytkownika",
        ],
        poprawna: 2,
        wyjasnienie: "Zamyka połączenie otwarte przez `mysqli_connect`.",
      },
      {
        pytanie: "Dane wysłane z formularza metodą GET:",
        odpowiedzi: [
          "są szyfrowane",
          "trafiają do tablicy `$_POST`",
          "nie mają limitu długości",
          "są widoczne w adresie URL",
        ],
        poprawna: 3,
        wyjasnienie:
          "GET dopisuje dane do adresu, np. `strona.php?imie=Jan`. Dlatego nie wysyłamy tak haseł.",
      },
      {
        pytanie:
          "Która funkcja chroni zapytanie SQL przed atakiem SQL Injection, zabezpieczając znaki specjalne w napisie?",
        odpowiedzi: [
          "`mysqli_real_escape_string()`",
          "`htmlentities()`",
          "`nl2br()`",
          "`trim()`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`mysqli_real_escape_string` poprzedza niebezpieczne znaki ukośnikiem. Jeszcze lepsze są zapytania przygotowane.",
      },
      {
        pytanie: 'Wynikiem `var_dump(5 === "5");` w PHP jest:',
        odpowiedzi: [
          "`bool(true)`",
          "`bool(false)`",
          "`int(5)`",
          '`string(1) "5"`',
        ],
        poprawna: 1,
        wyjasnienie:
          "`===` porównuje wartość i typ. Liczba całkowita i napis to różne typy.",
      },
      {
        pytanie:
          "Która tablica superglobalna zawiera informacje o serwerze, np. adres IP klienta?",
        odpowiedzi: ["`$_ENV`", "`$_FILES`", "`$_SERVER`", "`$_GLOBALS`"],
        poprawna: 2,
        wyjasnienie:
          'Np. `$_SERVER["REMOTE_ADDR"]` zawiera IP klienta, a `$_SERVER["REQUEST_METHOD"]` metodę żądania.',
      },
      {
        pytanie:
          "Która funkcja zwraca losową liczbę całkowitą z przedziału od 1 do 6 włącznie?",
        odpowiedzi: [
          "`random(1, 6)`",
          "`rand(6)`",
          "`math_rand(1, 6)`",
          "`rand(1, 6)`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`rand(min, max)` oraz `mt_rand(min, max)` losują liczbę całkowitą z przedziału domkniętego.",
      },
      {
        pytanie:
          'Który zapis dodaje element `"kiwi"` na koniec tablicy `$owoce`?',
        odpowiedzi: [
          '`array_push($owoce, "kiwi");`',
          '`$owoce + "kiwi";`',
          '`push($owoce, "kiwi");`',
          '`$owoce.add("kiwi");`',
        ],
        poprawna: 0,
        wyjasnienie:
          '`array_push` dodaje element na koniec. Równoważny jest zapis `$owoce[] = "kiwi";`.',
      },
      {
        pytanie: "Interfejs PDO w PHP:",
        odpowiedzi: [
          "obsługuje wyłącznie bazę MySQL",
          "umożliwia dostęp do różnych systemów baz danych w jednolity sposób",
          "służy do generowania plików PDF",
          "jest proceduralnym zamiennikiem mysqli bez obsługi obiektów",
        ],
        poprawna: 1,
        wyjasnienie:
          "PDO (PHP Data Objects) to obiektowa warstwa dostępu do wielu baz: MySQL, PostgreSQL, SQLite i innych.",
      },
    ],
  },
  {
    id: "sql",
    nazwa: "SQL",
    opis: "Relacyjne bazy danych i język SQL w MySQL/MariaDB: od tabel i kluczy, przez zapytania SELECT, złączenia i funkcje, po użytkowników, uprawnienia i kopie zapasowe — tak jak na egzaminie INF.03.",
    dzialy: [
      {
        id: "sql-podstawy",
        tytul: "Relacyjne bazy danych",
        tematy: [
          {
            id: "sql-pojecia",
            tytul: "Baza danych, tabela, rekord, pole",
            skrot:
              "Podstawowe pojęcia: baza danych, tabela, wiersz (rekord), kolumna (pole), SZBD, MySQL i MariaDB.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Baza danych** to uporządkowany zbiór danych zapisanych tak, żeby łatwo je wyszukiwać i zmieniać. W **relacyjnej** bazie danych dane trzymamy w **tabelach** (fachowo: relacjach).",
              },
              {
                typ: "p",
                tekst:
                  "W całym module używamy jednej przykładowej bazy `sklep`. Ma trzy tabele: `klienci`, `produkty` i `zamowienia`. Oto tabela `klienci`:",
              },
              {
                typ: "tabela",
                naglowki: [
                  "id",
                  "imie",
                  "nazwisko",
                  "miasto",
                  "email",
                  "data_rejestracji",
                ],
                wiersze: [
                  [
                    "1",
                    "Anna",
                    "Kowalska",
                    "Kraków",
                    "anna@poczta.pl",
                    "2023-03-15",
                  ],
                  [
                    "2",
                    "Jan",
                    "Nowak",
                    "Warszawa",
                    "jan@poczta.pl",
                    "2023-05-02",
                  ],
                  ["3", "Piotr", "Wiśniewski", "Kraków", "NULL", "2024-01-20"],
                  [
                    "4",
                    "Ewa",
                    "Zielińska",
                    "Gdańsk",
                    "ewa@poczta.pl",
                    "2024-06-11",
                  ],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Pojęcie", "Inna nazwa", "Co to jest"],
                wiersze: [
                  [
                    "Tabela",
                    "relacja",
                    "zbiór danych o jednym rodzaju obiektów, np. klientach",
                  ],
                  [
                    "Wiersz",
                    "rekord, krotka",
                    "dane jednego obiektu, np. jednego klienta",
                  ],
                  ["Kolumna", "pole, atrybut", "jedna cecha, np. `nazwisko`"],
                  [
                    "Dziedzina",
                    "typ danych",
                    "zbiór dozwolonych wartości kolumny, np. liczby całkowite",
                  ],
                  [
                    "`NULL`",
                    "brak wartości",
                    "pole puste (to NIE jest zero ani pusty napis)",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "SZBD — system zarządzania bazą danych",
              },
              {
                typ: "p",
                tekst:
                  "Program, który przechowuje bazy i wykonuje zapytania, to **SZBD** (ang. DBMS). Przykłady: **MySQL**, **MariaDB** (darmowa odmiana MySQL, jest w pakiecie XAMPP), PostgreSQL, SQLite, Microsoft SQL Server, Oracle. Bazą zarządzamy językiem **SQL**.",
              },
              {
                typ: "tabela",
                naglowki: ["Grupa poleceń SQL", "Skrót", "Polecenia"],
                wiersze: [
                  [
                    "Język definicji danych",
                    "DDL",
                    "`CREATE`, `ALTER`, `DROP`, `TRUNCATE`",
                  ],
                  [
                    "Język manipulacji danymi",
                    "DML",
                    "`INSERT`, `UPDATE`, `DELETE` (często też `SELECT`)",
                  ],
                  ["Język zapytań", "DQL", "`SELECT`"],
                  ["Język kontroli danych", "DCL", "`GRANT`, `REVOKE`"],
                  [
                    "Sterowanie transakcjami",
                    "TCL",
                    "`START TRANSACTION`, `COMMIT`, `ROLLBACK`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Algebra relacji",
              },
              {
                typ: "lista",
                elementy: [
                  "**Selekcja** — wybór **wierszy** spełniających warunek (w SQL: `WHERE`).",
                  "**Projekcja** — wybór **kolumn** (w SQL: lista kolumn po `SELECT`).",
                  "**Złączenie** — łączenie wierszy z dwóch tabel (w SQL: `JOIN`).",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe pytanie: „Selekcja w algebrze relacji to…” — odpowiedź: wybór krotek (wierszy) spełniających warunek. Nie myl z projekcją (wybór kolumn).",
              },
              {
                typ: "p",
                tekst:
                  "W MySQL/MariaDB tabela ma też **silnik składowania**. Domyślny **InnoDB** obsługuje klucze obce i transakcje. Starszy **MyISAM** ich nie obsługuje.",
              },
            ],
          },
          {
            id: "sql-klucze",
            tytul: "Klucz główny, klucz obcy, integralność",
            skrot:
              "Klucz główny jednoznacznie identyfikuje wiersz, klucz obcy wskazuje na wiersz w innej tabeli.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Klucz główny** (`PRIMARY KEY`) to kolumna (lub kilka kolumn), której wartość jednoznacznie identyfikuje każdy wiersz. W tabeli `klienci` jest to `id`.",
              },
              {
                typ: "lista",
                elementy: [
                  "wartości klucza głównego są **unikalne** (nie powtarzają się),",
                  "klucz główny **nie może być pusty** (`NULL`),",
                  "tabela ma najwyżej **jeden** klucz główny (ale może on składać się z kilku kolumn — to **klucz złożony**),",
                  "dla klucza głównego baza automatycznie tworzy indeks.",
                ],
              },
              {
                typ: "p",
                tekst:
                  "**Klucz obcy** (`FOREIGN KEY`) to kolumna, która przechowuje wartość klucza głównego z innej tabeli. W tabeli `zamowienia` kolumna `klient_id` wskazuje na `klienci.id`.",
              },
              {
                typ: "tabela",
                naglowki: [
                  "id",
                  "klient_id",
                  "produkt_id",
                  "ilosc",
                  "data_zamowienia",
                  "status",
                ],
                wiersze: [
                  ["1", "1", "3", "1", "2024-09-01", "wysłane"],
                  ["2", "1", "2", "2", "2024-09-01", "wysłane"],
                  ["3", "2", "1", "1", "2024-09-15", "nowe"],
                  ["4", "4", "5", "2", "2024-10-03", "nowe"],
                  ["5", "2", "2", "1", "2024-10-05", "anulowane"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Zamówienie nr 3 ma `klient_id = 2`, więc należy do klienta Jana Nowaka.",
              },
              {
                typ: "h",
                tekst: "Integralność danych",
              },
              {
                typ: "tabela",
                naglowki: ["Rodzaj integralności", "Co oznacza"],
                wiersze: [
                  ["encji", "każdy wiersz ma unikalny i niepusty klucz główny"],
                  [
                    "referencyjna",
                    "klucz obcy wskazuje na istniejący wiersz w tabeli nadrzędnej (albo ma wartość `NULL`)",
                  ],
                  [
                    "dziedzinowa",
                    "wartości pasują do typu i ograniczeń kolumny, np. `NOT NULL`, `CHECK`",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Inne pojęcia: **klucz kandydujący** — każda kolumna, która mogłaby być kluczem głównym (np. PESEL, e-mail). **Klucz naturalny** pochodzi z danych (PESEL), a **klucz sztuczny** jest dodany specjalnie, np. `id` z `AUTO_INCREMENT`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: która zasada spójności jest prawdziwa? Poprawnie: „pole klucza głównego nie może być puste”. Klucz obcy MOŻE być pusty, jeśli kolumna na to pozwala.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Klucz obcy w relacji 1:n jest w tabeli po stronie „wiele” (np. w `zamowienia`), a wskazuje na klucz główny tabeli po stronie „jeden” (`klienci`). Nie łączy się klucza obcego z innym kluczem obcym.",
              },
            ],
          },
          {
            id: "sql-relacje",
            tytul: "Relacje 1:1, 1:n, n:m i diagram ER",
            skrot:
              "Rodzaje związków między tabelami i jak je zapisać; tabela pośrednicząca dla n:m; encje i atrybuty na diagramie ER.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Relacja", "Przykład", "Jak zrobić"],
                wiersze: [
                  [
                    "1:1 (jeden do jednego)",
                    "osoba — dowód osobisty",
                    "klucz obcy z ograniczeniem `UNIQUE` w jednej z tabel",
                  ],
                  [
                    "1:n (jeden do wielu)",
                    "klient — jego zamówienia",
                    "klucz obcy w tabeli „wiele” (`zamowienia.klient_id`)",
                  ],
                  [
                    "n:m (wiele do wielu)",
                    "uczniowie — zajęcia dodatkowe",
                    "**tabela pośrednicząca** z dwoma kluczami obcymi",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "W bazie `sklep` klient może mieć wiele zamówień (1:n), a produkt może być w wielu zamówieniach (1:n). Tabela `zamowienia` łączy klientów z produktami.",
              },
              {
                typ: "h",
                tekst: "Relacja n:m — tabela pośrednicząca",
              },
              {
                typ: "p",
                tekst:
                  "Relacji wiele do wielu nie da się zapisać bezpośrednio. Tworzymy trzecią tabelę, która ma klucze obce do obu tabel:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE TABLE uczniowie_zajecia (\n  uczen_id INT NOT NULL,\n  zajecia_id INT NOT NULL,\n  PRIMARY KEY (uczen_id, zajecia_id),\n  FOREIGN KEY (uczen_id) REFERENCES uczniowie(id),\n  FOREIGN KEY (zajecia_id) REFERENCES zajecia(id)\n);",
              },
              {
                typ: "h",
                tekst: "Diagram ER (encja-związek)",
              },
              {
                typ: "lista",
                elementy: [
                  "**Encja** — obiekt, o którym zbieramy dane (np. `czytelnik`, `ksiazka`, `wypozyczenie`). Na diagramie to prostokąt, w bazie — tabela.",
                  "**Atrybut** — cecha encji (np. `imie`). W bazie — kolumna.",
                  "**Związek** — powiązanie encji (linia), z oznaczeniem krotności: `1`, `n`, `1..*`, `0..1`.",
                ],
              },
              {
                typ: "p",
                tekst:
                  "Na arkuszach praktycznych CKE baza jest pokazana jako rysunek tabel z phpMyAdmin (zakładka **Projektant**) z liniami relacji. Klucz główny jest zwykle oznaczony ikoną klucza.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Na egzaminie często jest zdanie: „Tabele połączone są relacją 1..n” albo „Należy posłużyć się relacją”. To znaczy, że w zapytaniu musisz złączyć tabele (`JOIN … ON` albo warunek w `WHERE`) po kluczu obcym.",
              },
            ],
          },
          {
            id: "sql-normalizacja",
            tytul: "Normalizacja: 1NF, 2NF, 3NF",
            skrot:
              "Normalizacja usuwa powtórzenia i anomalie; trzy pierwsze postacie normalne w prostych słowach.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Normalizacja** to dzielenie danych na tabele tak, aby nie było niepotrzebnych powtórzeń (redundancji). Dzięki temu nie ma **anomalii** — np. zmiany adresu klienta w jednym wierszu, a w innym nie.",
              },
              {
                typ: "p",
                tekst: "Tabela przed normalizacją (źle):",
              },
              {
                typ: "tabela",
                naglowki: ["id", "klient", "telefony", "produkty"],
                wiersze: [
                  [
                    "1",
                    "Anna Kowalska",
                    "600100200, 501222333",
                    "Monitor, Mysz",
                  ],
                  ["2", "Jan Nowak", "700300400", "Klawiatura"],
                ],
              },
              {
                typ: "h",
                tekst: "1NF — pierwsza postać normalna",
              },
              {
                typ: "lista",
                elementy: [
                  "każde pole zawiera **jedną, niepodzielną (atomową)** wartość — nie ma list typu „Monitor, Mysz”,",
                  "nie ma powtarzających się grup kolumn (`telefon1`, `telefon2`, `telefon3`),",
                  "każdy wiersz da się jednoznacznie zidentyfikować (jest klucz główny).",
                ],
              },
              {
                typ: "h",
                tekst: "2NF — druga postać normalna",
              },
              {
                typ: "p",
                tekst:
                  "Tabela jest w 1NF i każda kolumna niekluczowa zależy od **całego** klucza głównego, a nie tylko od jego części. Problem pojawia się przy kluczu złożonym, np. w tabeli `(zamowienie_id, produkt_id, nazwa_produktu)` nazwa zależy tylko od `produkt_id` — trzeba ją przenieść do tabeli `produkty`.",
              },
              {
                typ: "h",
                tekst: "3NF — trzecia postać normalna",
              },
              {
                typ: "p",
                tekst:
                  "Tabela jest w 2NF i kolumny niekluczowe zależą **tylko od klucza**, a nie od innych kolumn niekluczowych (brak zależności przechodnich). Przykład: w tabeli `klienci` kolumny `kod_pocztowy` i `miasto` — miasto zależy od kodu, więc można wydzielić tabelę kodów.",
              },
              {
                typ: "tabela",
                naglowki: ["Postać", "Warunek w skrócie"],
                wiersze: [
                  [
                    "1NF",
                    "wartości atomowe, brak powtarzających się grup, jest klucz główny",
                  ],
                  ["2NF", "1NF + brak zależności od części klucza złożonego"],
                  [
                    "3NF",
                    "2NF + brak zależności przechodnich między kolumnami niekluczowymi",
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "W teście padają pytania typu: „Tabela zawiera pole z kilkoma numerami telefonu — która postać normalna jest naruszona?” Odpowiedź: pierwsza (1NF), bo wartość nie jest atomowa.",
              },
            ],
          },
        ],
      },
      {
        id: "sql-narzedzia",
        tytul: "phpMyAdmin i typy danych",
        tematy: [
          {
            id: "sql-phpmyadmin",
            tytul: "phpMyAdmin na egzaminie",
            skrot:
              "Jak w XAMPP utworzyć bazę, zaimportować plik .sql, wykonać zapytanie, zrobić zrzut ekranu i eksport.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Na części praktycznej pracujesz w pakiecie **XAMPP** (serwer Apache + MariaDB + PHP). Bazą zarządzasz w **phpMyAdmin** — to aplikacja w przeglądarce pod adresem `http://localhost/phpmyadmin`.",
              },
              {
                typ: "h",
                tekst: "Typowe kroki z arkusza CKE",
              },
              {
                typ: "kroki",
                elementy: [
                  "Uruchom **XAMPP Control Panel** i kliknij **Start** przy `Apache` i `MySQL`.",
                  "Otwórz `http://localhost/phpmyadmin`.",
                  "Kliknij **Nowa** (New), wpisz nazwę bazy z arkusza, np. `sklep`, i wybierz metodę porównywania napisów z polskimi znakami, np. `utf8_unicode_ci` lub `utf8mb4_polish_ci`. Kliknij **Utwórz**.",
                  "Zaznacz nową bazę po lewej, wejdź w zakładkę **Import**, wybierz plik `baza.sql` z rozpakowanego archiwum i kliknij **Import** (Wykonaj).",
                  "Zrób zrzut **całego ekranu z widocznym paskiem zadań** — tak, aby było widać zaimportowane tabele. Zapisz go pod nazwą i w formacie z arkusza (np. `import.png`).",
                  "Wejdź w zakładkę **SQL**, wpisz zapytanie, kliknij **Wykonaj**. Zrób zrzut wyniku (np. `kw1.jpg`).",
                  "Treść wszystkich zapytań skopiuj do pliku `kwerendy.txt` w folderze z numerem PESEL.",
                ],
              },
              {
                typ: "p",
                tekst:
                  "To samo polecenie w SQL, gdybyś chciał utworzyć bazę zapytaniem:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE DATABASE sklep CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;",
              },
              {
                typ: "h",
                tekst: "Inne zakładki phpMyAdmin",
              },
              {
                typ: "tabela",
                naglowki: ["Zakładka", "Do czego służy"],
                wiersze: [
                  [
                    "Struktura",
                    "kolumny tabeli, typy, klucze, indeksy; zmiana struktury",
                  ],
                  ["Przeglądaj", "podgląd danych w tabeli"],
                  ["SQL", "wpisywanie i wykonywanie zapytań"],
                  ["Szukaj", "wyszukiwanie bez pisania SQL"],
                  ["Wstaw", "dodawanie wierszy przez formularz"],
                  [
                    "Eksport",
                    "zapis bazy lub tabeli do pliku (`.sql`, `.csv` i inne) — kopia zapasowa",
                  ],
                  ["Import", "wczytanie pliku `.sql` lub `.csv`"],
                  [
                    "Uprawnienia / Konta użytkowników",
                    "tworzenie użytkowników i nadawanie praw",
                  ],
                  ["Projektant", "graficzny podgląd relacji (diagram)"],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Nie kadruj zrzutów ekranu! Arkusz wymaga zrzutu **całego ekranu z paskiem zadań**. Użyj klawisza `PrtSc` i wklej obraz do programu graficznego (np. Paint) albo `Win + PrtSc` (zapisuje PNG w folderze Obrazy/Zrzuty ekranu). Zapisz w formacie, o który prosi arkusz (PNG albo JPEG).",
              },
              {
                typ: "egzamin",
                tekst:
                  "Na zrzucie wyniku zapytania musi być widać **treść zapytania i wynik**. Jeśli wynik jest długi, wystarczy jego początek. Jeżeli zapytanie nie zwraca wierszy (np. `INSERT`, `CREATE USER`), zrzut pokazuje komunikat o powodzeniu.",
              },
            ],
          },
          {
            id: "sql-typy-danych",
            tytul: "Typy danych w MySQL/MariaDB",
            skrot:
              "Najważniejsze typy kolumn: liczbowe, tekstowe, daty i specjalne — oraz kiedy którego użyć.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Każda kolumna ma **typ danych**. Typ określa, jakie wartości można zapisać i ile miejsca zajmują.",
              },
              {
                typ: "h",
                tekst: "Liczby",
              },
              {
                typ: "tabela",
                naglowki: ["Typ", "Opis", "Przykład użycia"],
                wiersze: [
                  [
                    "`TINYINT`",
                    "liczba całkowita 1 bajt: -128…127 (`UNSIGNED`: 0…255)",
                    "wiek, ocena, flaga 0/1",
                  ],
                  [
                    "`SMALLINT`",
                    "całkowita 2 bajty: -32768…32767",
                    "rok, liczba sztuk",
                  ],
                  ["`INT`", "całkowita 4 bajty: ok. ±2,1 mld", "`id`, ilość"],
                  ["`BIGINT`", "całkowita 8 bajtów", "bardzo duże liczniki"],
                  [
                    "`DECIMAL(m,d)`",
                    "liczba dokładna: `m` cyfr, w tym `d` po przecinku",
                    "**ceny, pieniądze**: `DECIMAL(8,2)`",
                  ],
                  [
                    "`FLOAT`, `DOUBLE`",
                    "liczby zmiennoprzecinkowe (przybliżone)",
                    "pomiary, obliczenia naukowe",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Tekst",
              },
              {
                typ: "tabela",
                naglowki: ["Typ", "Opis"],
                wiersze: [
                  [
                    "`CHAR(n)`",
                    "tekst o **stałej** długości `n` (krótszy jest dopełniany spacjami), max 255 znaków — np. kod pocztowy `CHAR(6)`",
                  ],
                  [
                    "`VARCHAR(n)`",
                    "tekst o **zmiennej** długości do `n` znaków — zajmuje tyle, ile tekst — np. `nazwisko VARCHAR(50)`",
                  ],
                  [
                    "`TEXT`",
                    "długi tekst (do 65 535 bajtów), np. opis produktu",
                  ],
                  [
                    "`ENUM('a','b')`",
                    "jedna wartość z podanej listy, np. `ENUM('nowe','wysłane','anulowane')`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Data i czas",
              },
              {
                typ: "tabela",
                naglowki: ["Typ", "Format", "Przykład"],
                wiersze: [
                  ["`DATE`", "`RRRR-MM-DD`", "`2024-09-01`"],
                  ["`TIME`", "`GG:MM:SS`", "`14:30:00`"],
                  [
                    "`DATETIME`",
                    "`RRRR-MM-DD GG:MM:SS`",
                    "`2024-09-01 14:30:00`",
                  ],
                  [
                    "`TIMESTAMP`",
                    "jak `DATETIME`, zapisuje czas UTC, często data modyfikacji",
                    "`2024-09-01 14:30:00`",
                  ],
                  ["`YEAR`", "rok", "`2024`"],
                ],
              },
              {
                typ: "h",
                tekst: "Wartości logiczne",
              },
              {
                typ: "p",
                tekst:
                  "`BOOLEAN` (lub `BOOL`) w MySQL/MariaDB to tak naprawdę `TINYINT(1)`: `0` = fałsz, `1` = prawda.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE TABLE produkty (\n  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n  nazwa VARCHAR(100) NOT NULL,\n  kategoria VARCHAR(30),\n  cena DECIMAL(8,2) NOT NULL,\n  ilosc INT DEFAULT 0,\n  opis TEXT,\n  promocja BOOLEAN DEFAULT 0\n);",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania o typy: „ceny w złotych z groszami” — `DECIMAL(…,2)`; „tekst o stałej długości” — `CHAR`; „data bez godziny” — `DATE`; „jedna wartość z listy” — `ENUM`. Daty w zapytaniach zapisuj w apostrofach: `'2024-09-01'`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`VARCHAR(50)` oznacza maksymalnie 50 **znaków**, a nie 50 bajtów. Teksty i daty zawsze w apostrofach, liczby bez apostrofów.",
              },
            ],
          },
        ],
      },
      {
        id: "sql-ddl",
        tytul: "Tworzenie i zmiana struktury (DDL)",
        tematy: [
          {
            id: "sql-create-table",
            tytul: "CREATE DATABASE i CREATE TABLE",
            skrot:
              "Tworzenie bazy i tabel z ograniczeniami: PRIMARY KEY, AUTO_INCREMENT, NOT NULL, DEFAULT, UNIQUE.",
            tresc: [
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE DATABASE sklep;\nUSE sklep;\nCREATE TABLE klienci (\n  id INT NOT NULL AUTO_INCREMENT,\n  imie VARCHAR(50) NOT NULL,\n  nazwisko VARCHAR(50) NOT NULL,\n  miasto VARCHAR(50),\n  email VARCHAR(100) UNIQUE,\n  data_rejestracji DATE,\n  PRIMARY KEY (id)\n);",
                tytul: "Baza sklep i tabela klienci",
              },
              {
                typ: "tabela",
                naglowki: ["Ograniczenie", "Znaczenie"],
                wiersze: [
                  ["`PRIMARY KEY`", "klucz główny — unikalny i niepusty"],
                  [
                    "`AUTO_INCREMENT`",
                    "baza sama nadaje kolejne numery (1, 2, 3…) — tylko dla kolumny z kluczem/indeksem",
                  ],
                  ["`NOT NULL`", "pole musi mieć wartość"],
                  ["`NULL`", "pole może być puste (domyślnie)"],
                  [
                    "`DEFAULT wartość`",
                    "wartość domyślna, gdy w `INSERT` jej nie podano",
                  ],
                  [
                    "`UNIQUE`",
                    "wartości w kolumnie nie mogą się powtarzać (ale może być `NULL`)",
                  ],
                  ["`UNSIGNED`", "tylko liczby nieujemne"],
                  [
                    "`CHECK (warunek)`",
                    "dodatkowy warunek, np. `CHECK (cena > 0)`",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Klucz główny można podać przy kolumnie (`id INT AUTO_INCREMENT PRIMARY KEY`) albo osobno na końcu (`PRIMARY KEY (id)`). Klucz złożony zapisujemy tylko drugim sposobem: `PRIMARY KEY (uczen_id, zajecia_id)`.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE TABLE IF NOT EXISTS produkty (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nazwa VARCHAR(100) NOT NULL,\n  kategoria VARCHAR(30) NOT NULL,\n  cena DECIMAL(8,2) NOT NULL CHECK (cena > 0),\n  ilosc INT NOT NULL DEFAULT 0\n);",
                tytul: "Tabela produkty",
              },
              {
                typ: "p",
                tekst:
                  "`IF NOT EXISTS` sprawia, że nie ma błędu, gdy tabela już istnieje. Strukturę tabeli sprawdzisz poleceniem `DESCRIBE produkty;` lub `SHOW COLUMNS FROM produkty;`, a listę tabel — `SHOW TABLES;`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "W pytaniach często trzeba wskazać poprawną składnię `CREATE TABLE`: nazwy kolumn bez apostrofów, typ zaraz po nazwie, kolumny oddzielone przecinkami, po ostatniej kolumnie **bez** przecinka.",
              },
            ],
          },
          {
            id: "sql-klucz-obcy",
            tytul: "FOREIGN KEY i REFERENCES",
            skrot:
              "Jak w SQL utworzyć klucz obcy i co robią ON DELETE CASCADE, SET NULL i RESTRICT.",
            tresc: [
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE TABLE zamowienia (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  klient_id INT NOT NULL,\n  produkt_id INT NOT NULL,\n  ilosc INT NOT NULL DEFAULT 1,\n  data_zamowienia DATE NOT NULL,\n  status ENUM('nowe', 'wysłane', 'anulowane') DEFAULT 'nowe',\n  FOREIGN KEY (klient_id) REFERENCES klienci(id),\n  FOREIGN KEY (produkt_id) REFERENCES produkty(id)\n);",
                tytul: "Tabela zamowienia z dwoma kluczami obcymi",
              },
              {
                typ: "p",
                tekst:
                  "Zapis `FOREIGN KEY (kolumna) REFERENCES tabela(kolumna)` znaczy: wartości w `klient_id` muszą istnieć w `klienci.id`. Typy obu kolumn muszą być zgodne (tu oba `INT`).",
              },
              {
                typ: "p",
                tekst:
                  "Ograniczenie można nazwać słowem `CONSTRAINT` — przydaje się, gdy chcemy je potem usunąć:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "ALTER TABLE zamowienia\n  ADD CONSTRAINT fk_zam_klient FOREIGN KEY (klient_id) REFERENCES klienci(id)\n  ON DELETE CASCADE ON UPDATE CASCADE;",
              },
              {
                typ: "tabela",
                naglowki: ["Opcja", "Co się stanie po usunięciu klienta"],
                wiersze: [
                  [
                    "`RESTRICT` / `NO ACTION` (domyślnie)",
                    "baza **nie pozwoli** usunąć klienta, który ma zamówienia",
                  ],
                  [
                    "`CASCADE`",
                    "razem z klientem zostaną usunięte jego zamówienia",
                  ],
                  [
                    "`SET NULL`",
                    "w zamówieniach `klient_id` zmieni się na `NULL` (kolumna musi dopuszczać `NULL`)",
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Poprawna składnia klucza obcego (także złożonego): `CONSTRAINT nazwa FOREIGN KEY (kol1, kol2) REFERENCES tabela (kol1, kol2)`. Odpowiedzi z `FOREIGN REFERENCES KEY` albo `FOREIGN KEY ON` są błędne.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Klucze obce działają tylko w silniku InnoDB. Tabela nadrzędna (`klienci`) musi istnieć, zanim utworzysz tabelę z kluczem obcym.",
              },
            ],
          },
          {
            id: "sql-alter",
            tytul: "ALTER TABLE — zmiana struktury",
            skrot:
              "Dodawanie, usuwanie i zmiana kolumn oraz zmiana nazwy tabeli poleceniem ALTER TABLE.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`ALTER TABLE` zmienia **strukturę** istniejącej tabeli (kolumny, klucze), a nie dane. To częste „zapytanie 4” na egzaminie praktycznym.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "ALTER TABLE klienci ADD telefon VARCHAR(15);\nALTER TABLE klienci ADD COLUMN ocena INT AFTER email;\nALTER TABLE klienci DROP COLUMN ocena;\nALTER TABLE klienci MODIFY telefon VARCHAR(20);\nALTER TABLE klienci CHANGE telefon nr_telefonu VARCHAR(20);\nALTER TABLE klienci RENAME COLUMN nr_telefonu TO tel;\nALTER TABLE klienci RENAME TO klienci_sklepu;\nALTER TABLE klienci_sklepu RENAME TO klienci;",
              },
              {
                typ: "tabela",
                naglowki: ["Polecenie", "Działanie"],
                wiersze: [
                  [
                    "`ADD [COLUMN] kolumna typ`",
                    "dodaje kolumnę (na końcu, `FIRST` — na początku, `AFTER x` — po kolumnie `x`)",
                  ],
                  ["`DROP [COLUMN] kolumna`", "usuwa kolumnę razem z danymi"],
                  [
                    "`MODIFY kolumna nowy_typ`",
                    "zmienia typ/ograniczenia, nazwa zostaje",
                  ],
                  [
                    "`CHANGE stara nowa typ`",
                    "zmienia nazwę **i** typ (typ trzeba podać zawsze)",
                  ],
                  [
                    "`RENAME COLUMN a TO b`",
                    "tylko zmiana nazwy kolumny (MySQL 8, MariaDB 10.5+)",
                  ],
                  [
                    "`RENAME TO nowa_nazwa`",
                    "zmiana nazwy tabeli (to samo: `RENAME TABLE a TO b;`)",
                  ],
                  ["`ADD PRIMARY KEY (kol)`", "dodaje klucz główny"],
                  [
                    "`ADD FOREIGN KEY (kol) REFERENCES t(kol)`",
                    "dodaje klucz obcy",
                  ],
                  [
                    "`DROP FOREIGN KEY nazwa`",
                    "usuwa klucz obcy o podanej nazwie",
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Przykład z arkusza: „dodaj do tabeli `wycieczki` kolumnę `ocena` typu całkowitego” — odpowiedź: `ALTER TABLE wycieczki ADD ocena INT;`. Błędne odpowiedzi w teście to np. `INSERT INTO wycieczki …` albo `ADD COLUMN … WITH …`.",
              },
            ],
          },
          {
            id: "sql-drop-truncate",
            tytul: "DROP, TRUNCATE i DELETE — różnice",
            skrot:
              "Usuwanie bazy, tabeli, wszystkich wierszy lub wybranych wierszy — czym różnią się te polecenia.",
            tresc: [
              {
                typ: "kod",
                jezyk: "sql",
                kod: "DROP DATABASE sklep_testowy;\nDROP TABLE IF EXISTS archiwum;\nTRUNCATE TABLE zamowienia;\nDELETE FROM zamowienia WHERE status = 'anulowane';",
              },
              {
                typ: "tabela",
                naglowki: [
                  "Polecenie",
                  "Co usuwa",
                  "Struktura tabeli",
                  "Grupa",
                ],
                wiersze: [
                  [
                    "`DROP TABLE t`",
                    "całą tabelę razem z danymi",
                    "znika",
                    "DDL",
                  ],
                  [
                    "`DROP DATABASE b`",
                    "całą bazę ze wszystkimi tabelami",
                    "znika",
                    "DDL",
                  ],
                  [
                    "`TRUNCATE TABLE t`",
                    "**wszystkie** wiersze, licznik `AUTO_INCREMENT` wraca do 1",
                    "zostaje",
                    "DDL",
                  ],
                  [
                    "`DELETE FROM t`",
                    "wiersze spełniające `WHERE` (bez `WHERE` — wszystkie)",
                    "zostaje",
                    "DML",
                  ],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "`DROP` i `TRUNCATE` nie pytają o potwierdzenie (phpMyAdmin pokaże okienko, ale SQL w konsoli — nie). Zanim usuniesz tabelę, zrób kopię (Eksport).",
              },
              {
                typ: "egzamin",
                tekst:
                  "„Które zapytanie usunie wszystkie rekordy z tabeli, ale zostawi jej strukturę?” — `TRUNCATE TABLE` (albo `DELETE FROM tabela;` bez warunku). `DROP TABLE` usuwa też strukturę.",
              },
            ],
          },
        ],
      },
      {
        id: "sql-dml",
        tytul: "Dodawanie, zmiana i usuwanie danych (DML)",
        tematy: [
          {
            id: "sql-insert",
            tytul: "INSERT INTO — dodawanie wierszy",
            skrot:
              "Dodawanie jednego i wielu wierszy, pomijanie kolumny AUTO_INCREMENT, NULL i DEFAULT.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Najbezpieczniej jest podać listę kolumn, a potem wartości w tej samej kolejności:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "INSERT INTO klienci (imie, nazwisko, miasto, email, data_rejestracji)\nVALUES ('Marek', 'Lis', 'Poznań', 'marek@poczta.pl', '2024-10-20');",
              },
              {
                typ: "p",
                tekst:
                  "Nie podajemy `id` — kolumna ma `AUTO_INCREMENT`, więc baza nada kolejny numer (tu: 5).",
              },
              {
                typ: "h",
                tekst: "Kilka wierszy naraz",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "INSERT INTO produkty (nazwa, kategoria, cena, ilosc) VALUES\n  ('Słuchawki', 'peryferia', 89.99, 12),\n  ('Kamera', 'peryferia', 149.00, 3);",
              },
              {
                typ: "h",
                tekst: "Bez listy kolumn",
              },
              {
                typ: "p",
                tekst:
                  "Wtedy trzeba podać wartości dla **wszystkich** kolumn, w kolejności z tabeli. Dla `id` można wpisać `NULL` (albo `DEFAULT`) — baza i tak nada numer.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "INSERT INTO produkty VALUES (NULL, 'Router', 'sieć', 199.00, 6);",
              },
              {
                typ: "tabela",
                naglowki: ["Zasada", "Przykład"],
                wiersze: [
                  ["teksty i daty w apostrofach", "`'Poznań'`, `'2024-10-20'`"],
                  ["liczby bez apostrofów, kropka dziesiętna", "`89.99`"],
                  ["brak wartości", "`NULL` (bez apostrofów)"],
                  ["wartość domyślna", "`DEFAULT` lub pominięcie kolumny"],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe zadanie praktyczne: „wstaw do tabeli wiersz z danymi z pliku rekord.txt; klucz główny nadawany automatycznie”. Pomiń kolumnę `id` w liście kolumn albo wstaw tam `NULL`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Liczba wartości musi zgadzać się z liczbą kolumn. Częsty błąd: przecinek dziesiętny `89,99` — SQL potraktuje go jako dwie osobne wartości.",
              },
            ],
          },
          {
            id: "sql-update-delete",
            tytul: "UPDATE i DELETE",
            skrot:
              "Zmiana i usuwanie istniejących wierszy; dlaczego warunek WHERE jest tak ważny.",
            tresc: [
              {
                typ: "h",
                tekst: "UPDATE — zmiana danych",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "UPDATE produkty SET ilosc = 20 WHERE id = 4;\nUPDATE produkty SET cena = cena * 1.1 WHERE kategoria = 'peryferia';\nUPDATE klienci SET miasto = 'Kraków', email = 'piotr@poczta.pl' WHERE id = 3;",
              },
              {
                typ: "p",
                tekst: "Po drugim zapytaniu ceny peryferiów rosną o 10%:",
              },
              {
                typ: "tabela",
                naglowki: ["id", "nazwa", "cena przed", "cena po"],
                wiersze: [
                  ["1", "Klawiatura", "120.00", "132.00"],
                  ["2", "Mysz", "45.50", "50.05"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Kilka kolumn zmieniamy jednym `SET`, oddzielając je przecinkami.",
              },
              {
                typ: "h",
                tekst: "DELETE — usuwanie wierszy",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "DELETE FROM zamowienia WHERE status = 'anulowane';\nDELETE FROM produkty WHERE ilosc = 0 AND kategoria = 'pamięci';",
              },
              {
                typ: "uwaga",
                tekst:
                  "`UPDATE` lub `DELETE` **bez** `WHERE` zmieni lub usunie **wszystkie** wiersze tabeli! Zawsze najpierw napisz warunek.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Zapamiętaj składnię: `UPDATE tabela SET kolumna = wartość WHERE warunek;` oraz `DELETE FROM tabela WHERE warunek;`. Błędne odpowiedzi w teście: `UPDATE … VALUES`, `DELETE kolumna FROM`, `SET` przed nazwą tabeli.",
              },
            ],
          },
        ],
      },
      {
        id: "sql-select",
        tytul: "Pobieranie danych (SELECT)",
        tematy: [
          {
            id: "sql-select-podstawy",
            tytul: "SELECT: kolumny, *, AS, DISTINCT",
            skrot:
              "Wybieranie kolumn, wszystkich kolumn, nadawanie aliasów i usuwanie powtórzeń.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "`SELECT` pobiera dane. Najprostsza postać: `SELECT kolumny FROM tabela;`. Tabela `produkty`:",
              },
              {
                typ: "tabela",
                naglowki: ["id", "nazwa", "kategoria", "cena", "ilosc"],
                wiersze: [
                  ["1", "Klawiatura", "peryferia", "120.00", "15"],
                  ["2", "Mysz", "peryferia", "45.50", "40"],
                  ["3", "Monitor", "monitory", "699.99", "5"],
                  ["4", "Pendrive", "pamięci", "39.90", "0"],
                  ["5", "Dysk SSD", "pamięci", "289.00", "8"],
                ],
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT * FROM produkty;\nSELECT nazwa, cena FROM produkty;\nSELECT nazwa AS produkt, cena * ilosc AS wartosc FROM produkty;",
              },
              {
                typ: "p",
                tekst:
                  "Gwiazdka `*` oznacza wszystkie kolumny. `AS` nadaje kolumnie **alias** (nową nazwę w wyniku). W kolumnach można liczyć. Wynik trzeciego zapytania:",
              },
              {
                typ: "tabela",
                naglowki: ["produkt", "wartosc"],
                wiersze: [
                  ["Klawiatura", "1800.00"],
                  ["Mysz", "1820.00"],
                  ["Monitor", "3499.95"],
                  ["Pendrive", "0.00"],
                  ["Dysk SSD", "2312.00"],
                ],
              },
              {
                typ: "h",
                tekst: "DISTINCT — bez powtórzeń",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT DISTINCT miasto FROM klienci;",
              },
              {
                typ: "tabela",
                naglowki: ["miasto"],
                wiersze: [["Kraków"], ["Warszawa"], ["Gdańsk"]],
              },
              {
                typ: "p",
                tekst:
                  "Kraków występuje w tabeli dwa razy, ale w wyniku tylko raz.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Na egzaminie praktycznym czytaj dokładnie: „wybierające **jedynie** pola nazwa i cena” — wtedy nie wolno użyć `*`. Kolejność kolumn w `SELECT` ma być taka jak w poleceniu.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Słowa kluczowe SQL nie zależą od wielkości liter (`select` = `SELECT`), ale przyjęło się pisać je wielkimi literami. Każde zapytanie kończ średnikiem.",
              },
            ],
          },
          {
            id: "sql-where",
            tytul: "WHERE: warunki i operatory",
            skrot:
              "Filtrowanie wierszy: porównania, BETWEEN, IN, LIKE z % i _, IS NULL oraz AND, OR, NOT.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Operator", "Znaczenie", "Przykład"],
                wiersze: [
                  ["`=`", "równe", "`miasto = 'Kraków'`"],
                  ["`<>` lub `!=`", "różne", "`status <> 'nowe'`"],
                  ["`<`, `>`, `<=`, `>=`", "porównania", "`cena >= 100`"],
                  [
                    "`BETWEEN a AND b`",
                    "od `a` do `b` **włącznie**",
                    "`cena BETWEEN 40 AND 300`",
                  ],
                  [
                    "`IN (…)`",
                    "jedna z wartości z listy",
                    "`miasto IN ('Kraków', 'Gdańsk')`",
                  ],
                  ["`LIKE`", "dopasowanie do wzorca", "`nazwisko LIKE 'K%'`"],
                  [
                    "`IS NULL` / `IS NOT NULL`",
                    "pole puste / niepuste",
                    "`email IS NULL`",
                  ],
                  [
                    "`AND`, `OR`, `NOT`",
                    "łączenie warunków",
                    "`cena < 100 AND ilosc > 0`",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT nazwa, cena FROM produkty WHERE cena BETWEEN 40 AND 300;",
              },
              {
                typ: "tabela",
                naglowki: ["nazwa", "cena"],
                wiersze: [
                  ["Klawiatura", "120.00"],
                  ["Mysz", "45.50"],
                  ["Dysk SSD", "289.00"],
                ],
              },
              {
                typ: "h",
                tekst: "LIKE — wzorce",
              },
              {
                typ: "lista",
                elementy: [
                  "`%` — dowolny ciąg znaków (także pusty),",
                  "`_` — **dokładnie jeden** dowolny znak.",
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Wzorzec", "Pasuje do", "Przykład trafienia"],
                wiersze: [
                  ["`'K%'`", "zaczyna się na K", "Kowalska"],
                  ["`'%ska'`", "kończy się na „ska”", "Kowalska, Zielińska"],
                  ["`'%ow%'`", "zawiera „ow”", "Kowalska, Nowak"],
                  ["`'_o%'`", "druga litera to „o”", "Kowalska, Nowak"],
                  [
                    "`'Z_%'`",
                    "zaczyna się na Z i ma co najmniej 2 znaki",
                    "Zielińska",
                  ],
                  ["`'____'`", "dokładnie 4 znaki", "Anna (`imie`)"],
                ],
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT imie, nazwisko FROM klienci WHERE nazwisko LIKE '_o%';\nSELECT imie, nazwisko FROM klienci WHERE email IS NULL;\nSELECT imie, nazwisko FROM klienci WHERE miasto IN ('Kraków', 'Gdańsk') AND NOT imie = 'Anna';",
              },
              {
                typ: "tabela",
                naglowki: ["Zapytanie", "Wynik"],
                wiersze: [
                  ["pierwsze", "Anna Kowalska, Jan Nowak"],
                  ["drugie", "Piotr Wiśniewski"],
                  ["trzecie", "Piotr Wiśniewski, Ewa Zielińska"],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Do sprawdzania pustych pól **nie** używaj `= NULL` — to nigdy nie jest prawdą. Pisz `IS NULL`. Pamiętaj też, że `AND` ma wyższy priorytet niż `OR` — w razie wątpliwości używaj nawiasów.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: nazwiska zaczynające się na Z i mające co najmniej jedną literę po Z — `LIKE 'Z_%'`. Znaki `?` i `*` w SQL **nie** są symbolami wieloznacznymi.",
              },
            ],
          },
          {
            id: "sql-order-limit",
            tytul: "ORDER BY i LIMIT",
            skrot:
              "Sortowanie rosnące i malejące, sortowanie po kilku kolumnach, ograniczanie liczby wierszy.",
            tresc: [
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT nazwa, cena FROM produkty ORDER BY cena DESC LIMIT 3;",
              },
              {
                typ: "tabela",
                naglowki: ["nazwa", "cena"],
                wiersze: [
                  ["Monitor", "699.99"],
                  ["Dysk SSD", "289.00"],
                  ["Klawiatura", "120.00"],
                ],
              },
              {
                typ: "lista",
                elementy: [
                  "`ORDER BY kolumna` lub `ORDER BY kolumna ASC` — rosnąco (A→Z, 0→9), to domyślne,",
                  "`ORDER BY kolumna DESC` — malejąco,",
                  "`ORDER BY miasto, nazwisko DESC` — najpierw po mieście rosnąco, a w tym samym mieście po nazwisku malejąco,",
                  "`LIMIT 3` — tylko 3 pierwsze wiersze; `LIMIT 2, 3` lub `LIMIT 3 OFFSET 2` — pomiń 2, weź 3.",
                ],
              },
              {
                typ: "p",
                tekst: "Kolejność klauzul w zapytaniu jest stała:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT kolumny\nFROM tabela\nWHERE warunek\nGROUP BY kolumna\nHAVING warunek_grupy\nORDER BY kolumna\nLIMIT liczba;",
              },
              {
                typ: "egzamin",
                tekst:
                  "Zadanie praktyczne: „pięć pierwszych wierszy o najwyższej punktacji” — `ORDER BY punkty DESC LIMIT 5`. „Posortowane alfabetycznie” — `ORDER BY nazwa ASC`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`ORDER BY` jest zawsze **po** `WHERE`, a `LIMIT` na samym końcu. Zapytanie `SELECT … ORDER BY … WHERE …` jest błędne.",
              },
            ],
          },
          {
            id: "sql-agregaty",
            tytul: "Funkcje agregujące, GROUP BY, HAVING",
            skrot:
              "COUNT, SUM, AVG, MIN, MAX; grupowanie wierszy i filtrowanie grup.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Funkcje agregujące liczą jedną wartość z wielu wierszy.",
              },
              {
                typ: "tabela",
                naglowki: [
                  "Funkcja",
                  "Co liczy",
                  "Wynik dla tabeli `produkty`",
                ],
                wiersze: [
                  [
                    "`COUNT(*)`",
                    "liczbę wierszy",
                    "`SELECT COUNT(*) FROM produkty;` → 5",
                  ],
                  [
                    "`COUNT(kolumna)`",
                    "liczbę wartości **niepustych**",
                    "`SELECT COUNT(email) FROM klienci;` → 3",
                  ],
                  ["`SUM(kolumna)`", "sumę", "`SUM(ilosc)` → 68"],
                  ["`AVG(kolumna)`", "średnią", "`AVG(cena)` → 238.878"],
                  [
                    "`MIN(kolumna)`",
                    "najmniejszą wartość",
                    "`MIN(cena)` → 39.90",
                  ],
                  [
                    "`MAX(kolumna)`",
                    "największą wartość",
                    "`MAX(cena)` → 699.99",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "GROUP BY — grupowanie",
              },
              {
                typ: "p",
                tekst:
                  "`GROUP BY` dzieli wiersze na grupy o tej samej wartości i liczy funkcję dla każdej grupy osobno:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT kategoria, COUNT(*) AS liczba, ROUND(AVG(cena), 2) AS srednia\nFROM produkty\nGROUP BY kategoria\nORDER BY kategoria;",
              },
              {
                typ: "tabela",
                naglowki: ["kategoria", "liczba", "srednia"],
                wiersze: [
                  ["monitory", "1", "699.99"],
                  ["pamięci", "2", "164.45"],
                  ["peryferia", "2", "82.75"],
                ],
              },
              {
                typ: "h",
                tekst: "HAVING — warunek dla grup",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT kategoria, COUNT(*) AS liczba\nFROM produkty\nGROUP BY kategoria\nHAVING COUNT(*) > 1;",
              },
              {
                typ: "tabela",
                naglowki: ["kategoria", "liczba"],
                wiersze: [
                  ["pamięci", "2"],
                  ["peryferia", "2"],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["", "WHERE", "HAVING"],
                wiersze: [
                  ["Kiedy działa", "przed grupowaniem", "po grupowaniu"],
                  ["Co filtruje", "pojedyncze wiersze", "całe grupy"],
                  [
                    "Funkcje agregujące",
                    "nie wolno",
                    "wolno, np. `HAVING SUM(ilosc) > 10`",
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Zadanie z arkusza: „zliczające liczbę wycieczek” — `SELECT COUNT(*) FROM wycieczki;`. Pytanie z testu: „suma linii kodu wszystkich programistów” — `SELECT SUM(ilosc_kodu) FROM programisci;`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Każda kolumna w `SELECT`, która nie jest w funkcji agregującej, powinna być w `GROUP BY`. Warunku z `COUNT()` nie wpisuj do `WHERE` — tylko do `HAVING`.",
              },
            ],
          },
          {
            id: "sql-funkcje",
            tytul: "Funkcje tekstowe, daty i liczbowe",
            skrot:
              "CONCAT, UPPER, LOWER, LENGTH, SUBSTRING, LEFT, NOW, CURDATE, YEAR, MONTH, DATEDIFF, ROUND.",
            tresc: [
              {
                typ: "h",
                tekst: "Funkcje tekstowe",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie", "Przykład → wynik"],
                wiersze: [
                  [
                    "`CONCAT(a, b, …)`",
                    "łączy teksty",
                    "`CONCAT(imie, ' ', nazwisko)` → `Anna Kowalska`",
                  ],
                  [
                    "`UPPER(t)`, `LOWER(t)`",
                    "wielkie / małe litery",
                    "`UPPER('Nowak')` → `NOWAK`",
                  ],
                  [
                    "`LENGTH(t)`",
                    "długość w **bajtach**",
                    "`LENGTH('Nowak')` → 5",
                  ],
                  [
                    "`CHAR_LENGTH(t)`",
                    "długość w znakach",
                    "`CHAR_LENGTH('Wiśniewski')` → 10",
                  ],
                  [
                    "`SUBSTRING(t, start, n)`",
                    "fragment: od pozycji `start` (od 1), `n` znaków",
                    "`SUBSTRING('Klawiatura', 1, 4)` → `Klaw`",
                  ],
                  [
                    "`LEFT(t, n)`, `RIGHT(t, n)`",
                    "`n` znaków od lewej / prawej",
                    "`LEFT(opis, 100)` → pierwsze 100 znaków",
                  ],
                  [
                    "`TRIM(t)`",
                    "usuwa spacje z początku i końca",
                    "`TRIM('  a ')` → `a`",
                  ],
                  [
                    "`REPLACE(t, a, b)`",
                    "zamienia `a` na `b`",
                    "`REPLACE('a-b', '-', '/')` → `a/b`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Funkcje daty i czasu",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Działanie", "Przykład → wynik"],
                wiersze: [
                  [
                    "`NOW()`",
                    "bieżąca data i godzina",
                    "`2024-10-28 12:00:00`",
                  ],
                  ["`CURDATE()`", "bieżąca data", "`2024-10-28`"],
                  ["`CURTIME()`", "bieżąca godzina", "`12:00:00`"],
                  [
                    "`YEAR(d)`, `MONTH(d)`, `DAY(d)`",
                    "rok / miesiąc / dzień z daty",
                    "`YEAR('2024-09-01')` → 2024",
                  ],
                  [
                    "`DATEDIFF(d1, d2)`",
                    "liczba dni `d1 - d2`",
                    "`DATEDIFF('2024-12-31', '2024-12-01')` → 30",
                  ],
                  [
                    "`DATE_FORMAT(d, f)`",
                    "formatowanie daty",
                    "`DATE_FORMAT('2024-09-01', '%d.%m.%Y')` → `01.09.2024`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Funkcje liczbowe",
              },
              {
                typ: "tabela",
                naglowki: ["Funkcja", "Przykład → wynik"],
                wiersze: [
                  ["`ROUND(x, n)`", "`ROUND(45.567, 1)` → 45.6"],
                  [
                    "`CEIL(x)`, `FLOOR(x)`",
                    "`CEIL(4.1)` → 5, `FLOOR(4.9)` → 4",
                  ],
                  ["`ABS(x)`", "`ABS(-7)` → 7"],
                  [
                    "`x % y` lub `MOD(x, y)`",
                    "`10 % 3` → 1 (reszta z dzielenia)",
                  ],
                  ["`RAND()`", "losowa liczba z przedziału [0, 1)"],
                ],
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT CONCAT(imie, ' ', nazwisko) AS klient, YEAR(data_rejestracji) AS rok\nFROM klienci\nWHERE YEAR(data_rejestracji) = 2024;",
              },
              {
                typ: "tabela",
                naglowki: ["klient", "rok"],
                wiersze: [
                  ["Piotr Wiśniewski", "2024"],
                  ["Ewa Zielińska", "2024"],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Arkusz zwykle podaje tabelkę z potrzebnymi funkcjami, np. `LEFT(exp, n)`. Przykład: „pierwsze 100 znaków opisu” — `SELECT nazwa, LEFT(opis, 100) FROM gry WHERE id = 1;`.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`LENGTH` liczy bajty, więc dla polskich liter wynik jest większy niż liczba znaków (`LENGTH('Wiśniewski')` → 11). Liczbę znaków daje `CHAR_LENGTH`.",
              },
            ],
          },
          {
            id: "sql-join",
            tytul: "Złączenia tabel: JOIN",
            skrot:
              "INNER JOIN, LEFT JOIN, RIGHT JOIN, złączenie w WHERE oraz aliasy tabel.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Złączenie (`JOIN`) łączy wiersze z dwóch tabel na podstawie powiązanych kolumn — zwykle klucz obcy = klucz główny.",
              },
              {
                typ: "h",
                tekst: "INNER JOIN — tylko pasujące wiersze",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT z.id, p.nazwa, z.ilosc\nFROM zamowienia z\nINNER JOIN produkty p ON z.produkt_id = p.id;",
              },
              {
                typ: "tabela",
                naglowki: ["id", "nazwa", "ilosc"],
                wiersze: [
                  ["1", "Monitor", "1"],
                  ["2", "Mysz", "2"],
                  ["3", "Klawiatura", "1"],
                  ["4", "Dysk SSD", "2"],
                  ["5", "Mysz", "1"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "`z` i `p` to **aliasy tabel** (krótkie nazwy). Zamiast `zamowienia z` można napisać `zamowienia AS z`. Słowo `INNER` można pominąć — samo `JOIN` to też złączenie wewnętrzne.",
              },
              {
                typ: "h",
                tekst: "Złączenie w WHERE (stary zapis)",
              },
              {
                typ: "p",
                tekst:
                  "To samo da się zapisać bez `JOIN` — tabele po przecinku, a warunek złączenia w `WHERE`. Ten zapis często pojawia się w kluczach odpowiedzi CKE:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT zamowienia.id, produkty.nazwa, zamowienia.ilosc\nFROM zamowienia, produkty\nWHERE zamowienia.produkt_id = produkty.id;",
              },
              {
                typ: "h",
                tekst: "LEFT JOIN — wszystkie z lewej tabeli",
              },
              {
                typ: "p",
                tekst:
                  "`LEFT JOIN` zwraca **wszystkie** wiersze z lewej tabeli, a gdy nie ma pary — w kolumnach prawej tabeli wpisuje `NULL`:",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT k.imie, z.id AS zamowienie\nFROM klienci k\nLEFT JOIN zamowienia z ON k.id = z.klient_id\nORDER BY k.id, z.id;",
              },
              {
                typ: "tabela",
                naglowki: ["imie", "zamowienie"],
                wiersze: [
                  ["Anna", "1"],
                  ["Anna", "2"],
                  ["Jan", "3"],
                  ["Jan", "5"],
                  ["Piotr", "NULL"],
                  ["Ewa", "4"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Piotr nie złożył zamówienia, ale i tak jest w wyniku. `RIGHT JOIN` działa odwrotnie — zachowuje wszystkie wiersze z prawej tabeli.",
              },
              {
                typ: "h",
                tekst: "Trzy tabele",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT k.nazwisko, p.nazwa, z.ilosc\nFROM zamowienia z\nJOIN klienci k ON z.klient_id = k.id\nJOIN produkty p ON z.produkt_id = p.id\nWHERE z.status = 'nowe';",
              },
              {
                typ: "tabela",
                naglowki: ["nazwisko", "nazwa", "ilosc"],
                wiersze: [
                  ["Nowak", "Klawiatura", "1"],
                  ["Zielińska", "Dysk SSD", "2"],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Złączenie", "Co zwraca"],
                wiersze: [
                  [
                    "`INNER JOIN`",
                    "tylko wiersze, które mają parę w obu tabelach",
                  ],
                  [
                    "`LEFT JOIN`",
                    "wszystkie z lewej + pasujące z prawej (reszta `NULL`)",
                  ],
                  ["`RIGHT JOIN`", "wszystkie z prawej + pasujące z lewej"],
                  [
                    "`CROSS JOIN` / tabele po przecinku bez warunku",
                    "iloczyn kartezjański — każdy wiersz z każdym",
                  ],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Gdy kolumna o tej samej nazwie (np. `id`) jest w obu tabelach, musisz poprzedzić ją nazwą lub aliasem tabeli: `p.id`. Inaczej pojawi się błąd „niejednoznaczna kolumna”. Zapomniany warunek złączenia daje iloczyn kartezjański.",
              },
              {
                typ: "egzamin",
                tekst:
                  "„Należy posłużyć się relacją” = zrób złączenie po kluczu obcym. Przykład z arkusza: `SELECT produkty.nazwa, produkty.cena, kategorie.nazwa FROM produkty JOIN kategorie ON produkty.kategoria_id = kategorie.id;`. Oba zapisy (`JOIN … ON` i warunek w `WHERE`) są uznawane.",
              },
            ],
          },
          {
            id: "sql-podzapytania",
            tytul: "Podzapytania",
            skrot:
              "Zapytanie w zapytaniu: porównanie z wynikiem AVG, IN i NOT IN z listą z innej tabeli.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Podzapytanie** to `SELECT` zapisany w nawiasach wewnątrz innego zapytania. Najpierw wykonuje się podzapytanie, a jego wynik trafia do zapytania zewnętrznego.",
              },
              {
                typ: "h",
                tekst: "Porównanie z jedną wartością",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT nazwa, cena\nFROM produkty\nWHERE cena > (SELECT AVG(cena) FROM produkty);",
              },
              {
                typ: "p",
                tekst: "Średnia cena wynosi 238.878, więc wynik to:",
              },
              {
                typ: "tabela",
                naglowki: ["nazwa", "cena"],
                wiersze: [
                  ["Monitor", "699.99"],
                  ["Dysk SSD", "289.00"],
                ],
              },
              {
                typ: "h",
                tekst: "IN i NOT IN — lista wartości",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "SELECT imie, nazwisko FROM klienci\nWHERE id IN (SELECT klient_id FROM zamowienia);\n\nSELECT imie, nazwisko FROM klienci\nWHERE id NOT IN (SELECT klient_id FROM zamowienia);",
              },
              {
                typ: "tabela",
                naglowki: ["Zapytanie", "Wynik"],
                wiersze: [
                  ["z `IN`", "Anna Kowalska, Jan Nowak, Ewa Zielińska"],
                  ["z `NOT IN`", "Piotr Wiśniewski (nie ma zamówień)"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Podzapytanie może też być w `FROM` (jako tymczasowa tabela z aliasem) albo w `INSERT INTO … SELECT …`, który kopiuje wiersze z jednej tabeli do drugiej.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Na teście bywa pytanie, co zwróci zapytanie z `WHERE cena > (SELECT AVG(cena) …)` — „produkty droższe od średniej”. W części praktycznej podzapytania pojawiają się rzadko; zwykle wystarczy `JOIN`, `WHERE` i funkcje agregujące.",
              },
            ],
          },
        ],
      },
      {
        id: "sql-administracja",
        tytul: "Administracja bazą danych",
        tematy: [
          {
            id: "sql-widoki-indeksy",
            tytul: "Widoki i indeksy",
            skrot:
              "CREATE VIEW tworzy wirtualną tabelę z zapytania, CREATE INDEX przyspiesza wyszukiwanie.",
            tresc: [
              {
                typ: "h",
                tekst: "Widok (VIEW)",
              },
              {
                typ: "p",
                tekst:
                  "**Widok** to zapisane zapytanie, które zachowuje się jak tabela. Nie przechowuje własnych danych — za każdym razem pobiera je z tabel źródłowych.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE VIEW nowe_zamowienia AS\nSELECT z.id, k.nazwisko, p.nazwa, z.ilosc\nFROM zamowienia z\nJOIN klienci k ON z.klient_id = k.id\nJOIN produkty p ON z.produkt_id = p.id\nWHERE z.status = 'nowe';\n\nSELECT * FROM nowe_zamowienia;\nDROP VIEW nowe_zamowienia;",
              },
              {
                typ: "lista",
                elementy: [
                  "upraszcza długie zapytania (piszesz je raz),",
                  "pozwala pokazać użytkownikowi tylko wybrane kolumny (bezpieczeństwo),",
                  "`CREATE OR REPLACE VIEW` nadpisuje istniejący widok.",
                ],
              },
              {
                typ: "h",
                tekst: "Indeks (INDEX)",
              },
              {
                typ: "p",
                tekst:
                  "**Indeks** działa jak skorowidz w książce — przyspiesza wyszukiwanie, sortowanie i złączenia po danej kolumnie. Kosztem jest więcej miejsca na dysku i wolniejsze `INSERT`/`UPDATE`.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE INDEX idx_nazwisko ON klienci (nazwisko);\nCREATE UNIQUE INDEX idx_email ON klienci (email);\nSHOW INDEX FROM klienci;\nDROP INDEX idx_nazwisko ON klienci;",
              },
              {
                typ: "tabela",
                naglowki: ["Rodzaj indeksu", "Opis"],
                wiersze: [
                  ["`PRIMARY`", "tworzony automatycznie dla klucza głównego"],
                  ["`UNIQUE`", "wartości nie mogą się powtarzać"],
                  ["`INDEX` (zwykły)", "tylko przyspiesza wyszukiwanie"],
                  ["`FULLTEXT`", "wyszukiwanie słów w długich tekstach"],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytanie z testu: „Do czego służy indeks?” — do przyspieszenia wyszukiwania danych. „Czym jest widok?” — wirtualną tabelą tworzoną na podstawie zapytania `SELECT`.",
              },
            ],
          },
          {
            id: "sql-uzytkownicy",
            tytul: "Użytkownicy i uprawnienia",
            skrot:
              "CREATE USER, GRANT, REVOKE, GRANT OPTION, zmiana hasła, DROP USER, SHOW GRANTS i FLUSH PRIVILEGES.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Każdy użytkownik bazy ma nazwę **i host**, z którego może się łączyć: `'nazwa'@'localhost'` (tylko z tego komputera) lub `'nazwa'@'%'` (z dowolnego hosta).",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "CREATE USER 'jan'@'localhost' IDENTIFIED BY 'Tajne123!';\nGRANT SELECT, INSERT ON sklep.klienci TO 'jan'@'localhost';\nGRANT SELECT, UPDATE ON sklep.* TO 'jan'@'localhost';\nGRANT ALL PRIVILEGES ON sklep.* TO 'admin'@'localhost' WITH GRANT OPTION;\nREVOKE INSERT ON sklep.klienci FROM 'jan'@'localhost';\nSHOW GRANTS FOR 'jan'@'localhost';",
              },
              {
                typ: "tabela",
                naglowki: ["Zapis `ON`", "Zakres uprawnień"],
                wiersze: [
                  ["`*.*`", "wszystkie bazy i tabele na serwerze"],
                  ["`sklep.*`", "wszystkie tabele w bazie `sklep`"],
                  ["`sklep.klienci`", "tylko tabela `klienci` w bazie `sklep`"],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Uprawnienie", "Pozwala na"],
                wiersze: [
                  ["`SELECT`", "odczyt (przeglądanie) danych"],
                  ["`INSERT`", "dodawanie wierszy"],
                  ["`UPDATE`", "zmianę (aktualizację) danych"],
                  ["`DELETE`", "usuwanie wierszy"],
                  ["`CREATE`", "tworzenie baz i tabel"],
                  ["`ALTER`", "zmianę struktury tabel"],
                  ["`DROP`", "usuwanie tabel i baz"],
                  ["`INDEX`", "tworzenie i usuwanie indeksów"],
                  ["`CREATE VIEW`", "tworzenie widoków"],
                  [
                    "`ALL PRIVILEGES`",
                    "wszystkie uprawnienia (oprócz przekazywania)",
                  ],
                  [
                    "`GRANT OPTION`",
                    "przekazywanie swoich uprawnień innym (`WITH GRANT OPTION`)",
                  ],
                  ["`USAGE`", "brak uprawnień — tylko możliwość zalogowania"],
                ],
              },
              {
                typ: "h",
                tekst: "Hasło, zmiana nazwy, usuwanie",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "ALTER USER 'jan'@'localhost' IDENTIFIED BY 'Nowe456!';\nSET PASSWORD FOR 'jan'@'localhost' = PASSWORD('Nowe456!');\nRENAME USER 'jan'@'localhost' TO 'jan.nowak'@'localhost';\nDROP USER 'jan.nowak'@'localhost';\nFLUSH PRIVILEGES;",
              },
              {
                typ: "p",
                tekst:
                  "`ALTER USER … IDENTIFIED BY` działa w MariaDB i MySQL. Zapis `SET PASSWORD … = PASSWORD('…')` działa w MariaDB (w MySQL 8 funkcja `PASSWORD()` została usunięta). `FLUSH PRIVILEGES` przeładowuje tabele uprawnień — jest potrzebne po ręcznej zmianie tabel systemowych, a przy `GRANT`/`REVOKE` nie szkodzi.",
              },
              {
                typ: "uwaga",
                tekst:
                  "`GRANT … TO`, ale `REVOKE … FROM`. Nazwę użytkownika i host zapisuj w apostrofach, rozdzielone `@`. Uprawnienia rozdzielaj przecinkami.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Zadanie z arkusza (styczeń 2025): utwórz konto `Marek` na localhost z hasłem `M@reK`, potem nadaj mu prawa jedynie do przeglądania i aktualizacji tabeli `produkt` w bazie `obuwie`: `CREATE USER 'Marek'@'localhost' IDENTIFIED BY 'M@reK';` oraz `GRANT SELECT, UPDATE ON obuwie.produkt TO 'Marek'@'localhost';`.",
              },
            ],
          },
          {
            id: "sql-transakcje",
            tytul: "Transakcje i ACID",
            skrot:
              "START TRANSACTION, COMMIT, ROLLBACK oraz cechy transakcji: atomowość, spójność, izolacja, trwałość.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Transakcja** to grupa poleceń, które muszą wykonać się **wszystkie albo żadne**. Klasyczny przykład: przelew — pieniądze znikają z jednego konta i pojawiają się na drugim.",
              },
              {
                typ: "kod",
                jezyk: "sql",
                kod: "START TRANSACTION;\nUPDATE produkty SET ilosc = ilosc - 1 WHERE id = 3;\nINSERT INTO zamowienia (klient_id, produkt_id, ilosc, data_zamowienia)\nVALUES (3, 3, 1, CURDATE());\nCOMMIT;",
              },
              {
                typ: "tabela",
                naglowki: ["Polecenie", "Działanie"],
                wiersze: [
                  ["`START TRANSACTION` lub `BEGIN`", "rozpoczyna transakcję"],
                  ["`COMMIT`", "zatwierdza zmiany na stałe"],
                  [
                    "`ROLLBACK`",
                    "wycofuje wszystkie zmiany od początku transakcji",
                  ],
                  [
                    "`SAVEPOINT nazwa`",
                    "punkt pośredni, do którego można wrócić: `ROLLBACK TO nazwa`",
                  ],
                  [
                    "`SET autocommit = 0`",
                    "wyłącza automatyczne zatwierdzanie każdego polecenia",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "ACID — cechy transakcji",
              },
              {
                typ: "tabela",
                naglowki: ["Litera", "Cecha", "Znaczenie"],
                wiersze: [
                  ["A", "Atomowość (niepodzielność)", "wszystko albo nic"],
                  [
                    "C",
                    "Spójność",
                    "po transakcji baza spełnia wszystkie reguły (klucze, ograniczenia)",
                  ],
                  [
                    "I",
                    "Izolacja",
                    "równoległe transakcje nie widzą swoich niezatwierdzonych zmian",
                  ],
                  [
                    "D",
                    "Trwałość",
                    "zatwierdzone zmiany nie znikną nawet po awarii",
                  ],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Transakcje obsługuje silnik **InnoDB**. W tabelach MyISAM `ROLLBACK` nic nie cofnie.",
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania: „Które polecenie wycofuje transakcję?” — `ROLLBACK`. „Co oznacza litera I w ACID?” — izolację.",
              },
            ],
          },
          {
            id: "sql-kopie",
            tytul: "Kopie zapasowe i narzędzia",
            skrot:
              "Eksport i import w phpMyAdmin, mysqldump, przywracanie bazy, mysqlcheck i format CSV.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Kopię bazy najprościej zrobić w phpMyAdmin: zakładka **Eksport**, format **SQL**, przycisk **Eksportuj**. Powstaje plik `.sql` z poleceniami `CREATE TABLE` i `INSERT INTO`. Przywracamy go zakładką **Import**.",
              },
              {
                typ: "h",
                tekst: "Wiersz poleceń",
              },
              {
                typ: "kod",
                jezyk: "text",
                kod: "mysqldump -u root -p sklep > kopia_sklep.sql\nmysqldump -u root -p --all-databases > wszystkie.sql\nmysql -u root -p sklep < kopia_sklep.sql\nmysqlcheck -u root -p --optimize sklep",
              },
              {
                typ: "tabela",
                naglowki: ["Narzędzie", "Do czego służy"],
                wiersze: [
                  [
                    "`mysqldump`",
                    "tworzy kopię zapasową (zrzut) bazy do pliku `.sql`",
                  ],
                  [
                    "`mysql`",
                    "klient konsolowy: łączy się z serwerem, wykonuje zapytania i pliki `.sql`",
                  ],
                  ["`mysqlcheck`", "sprawdza, naprawia i optymalizuje tabele"],
                  [
                    "`mysqlimport`",
                    "importuje dane z plików tekstowych (np. CSV)",
                  ],
                  [
                    "`mysqladmin`",
                    "administracja serwerem (status, zatrzymanie, hasło)",
                  ],
                  ["`mysqlshow`", "pokazuje bazy, tabele i kolumny"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Opcja `-u` to nazwa użytkownika, `-p` każe zapytać o hasło. W XAMPP programy te są w folderze `C:\\xampp\\mysql\\bin`.",
              },
              {
                typ: "h",
                tekst: "Formaty wymiany danych",
              },
              {
                typ: "lista",
                elementy: [
                  "**SQL** — polecenia odtwarzające strukturę i dane,",
                  "**CSV** — tekst, wartości oddzielone przecinkami (lub średnikami); otwiera go np. arkusz kalkulacyjny,",
                  "**XML**, **JSON** — formaty strukturalne, używane np. w wymianie danych przez API.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania z testu: „Którym poleceniem wykonasz kopię bazy?” — `mysqldump`. „Którym sprawdzisz i zoptymalizujesz tabele?” — `mysqlcheck`. „Dane z arkusza kalkulacyjnego zapisane jako tekst z przecinkami” — format CSV.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Kopie zapasowe rób regularnie i przechowuj w innym miejscu niż serwer. Kopia, której nigdy nie przywrócono na próbę, może okazać się bezużyteczna.",
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        pytanie:
          "Które polecenie SQL służy do zmiany struktury istniejącej tabeli, np. dodania kolumny?",
        odpowiedzi: [
          "`INSERT INTO`",
          "`ALTER TABLE`",
          "`MODIFY TABLE`",
          "`UPDATE TABLE`",
        ],
        poprawna: 1,
        wyjasnienie:
          "`ALTER TABLE` zmienia strukturę (kolumny, klucze). `UPDATE` zmienia dane, a `INSERT INTO` dodaje wiersze.",
      },
      {
        pytanie:
          "Które zapytanie doda do tabeli `wycieczki` kolumnę `ocena` typu całkowitego?",
        odpowiedzi: [
          "`INSERT INTO wycieczki VALUES (ocena INT);`",
          "`UPDATE wycieczki ADD COLUMN ocena INT;`",
          "`ALTER TABLE wycieczki ADD ocena INT;`",
          "`ADD COLUMN ocena INT WITH wycieczki;`",
        ],
        poprawna: 2,
        wyjasnienie:
          "Kolumnę dodajemy poleceniem `ALTER TABLE nazwa ADD [COLUMN] kolumna typ;`.",
      },
      {
        pytanie:
          "Które zapytanie wybierze nazwiska klientów zaczynające się literą Z i mające co najmniej dwa znaki?",
        odpowiedzi: [
          "`SELECT nazwisko FROM klient WHERE nazwisko LIKE '%Z_';`",
          "`SELECT nazwisko FROM klient WHERE nazwisko LIKE 'Z?*';`",
          "`SELECT nazwisko FROM klient WHERE nazwisko = 'Z_%';`",
          "`SELECT nazwisko FROM klient WHERE nazwisko LIKE 'Z_%';`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`_` to dokładnie jeden znak, `%` dowolny ciąg. Wzorce działają tylko z `LIKE`, nie z `=`.",
      },
      {
        pytanie: "Polecenie `TRUNCATE TABLE zamowienia;`",
        odpowiedzi: [
          "usuwa wszystkie wiersze, ale zostawia strukturę tabeli",
          "skraca długość wszystkich pól tekstowych",
          "usuwa tabelę razem ze strukturą",
          "usuwa tylko wiersze z wartością `NULL`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`TRUNCATE` czyści tabelę i zeruje licznik `AUTO_INCREMENT`. Tabelę razem ze strukturą usuwa `DROP TABLE`.",
      },
      {
        pytanie: "Która zasada dotycząca klucza głównego jest prawdziwa?",
        odpowiedzi: [
          "klucz główny musi być typu tekstowego",
          "tabela może mieć kilka kluczy głównych",
          "wartość klucza głównego nie może być pusta i musi być unikalna",
          "klucz główny zawsze wskazuje na inną tabelę",
        ],
        poprawna: 2,
        wyjasnienie:
          "Klucz główny jednoznacznie identyfikuje wiersz: unikalny i `NOT NULL`. Na inną tabelę wskazuje klucz obcy.",
      },
      {
        pytanie:
          "W relacji jeden do wielu (1:n) między tabelami `klienci` i `zamowienia` klucz obcy umieszczamy",
        odpowiedzi: [
          "w tabeli `klienci`, wskazując na `zamowienia`",
          "w tabeli `zamowienia`, wskazując na klucz główny tabeli `klienci`",
          "w obu tabelach jednocześnie",
          "w osobnej tabeli pośredniczącej",
        ],
        poprawna: 1,
        wyjasnienie:
          "Klucz obcy jest po stronie „wiele” i wskazuje na klucz główny strony „jeden”. Tabela pośrednicząca jest potrzebna przy n:m.",
      },
      {
        pytanie: "Jak zapisać w relacyjnej bazie związek wiele do wielu (n:m)?",
        odpowiedzi: [
          "przez dodatkową tabelę pośredniczącą z dwoma kluczami obcymi",
          "nie da się go zapisać w bazie relacyjnej",
          "przez klucz główny złożony z wszystkich kolumn",
          "przez jeden klucz obcy w dowolnej z tabel",
        ],
        poprawna: 0,
        wyjasnienie:
          "Relację n:m rozbijamy na dwie relacje 1:n za pomocą tabeli łączącej, np. `uczniowie_zajecia`.",
      },
      {
        pytanie: "Selekcja w algebrze relacji polega na",
        odpowiedzi: [
          "usunięciu powtarzających się kolumn",
          "wybraniu wskazanych kolumn tabeli",
          "połączeniu dwóch tabel",
          "wybraniu krotek (wierszy) spełniających zadany warunek",
        ],
        poprawna: 3,
        wyjasnienie:
          "Selekcja to wybór wierszy (`WHERE`). Wybór kolumn to projekcja.",
      },
      {
        pytanie:
          "Tabela zawiera pole `telefony` z wartością „600100200, 501222333”. Która postać normalna jest naruszona?",
        odpowiedzi: [
          "pierwsza (1NF)",
          "trzecia (3NF)",
          "żadna, to poprawny zapis",
          "druga (2NF)",
        ],
        poprawna: 0,
        wyjasnienie:
          "1NF wymaga wartości atomowych — jedno pole, jedna wartość.",
      },
      {
        pytanie:
          "Który typ danych najlepiej nadaje się do przechowywania cen z groszami?",
        odpowiedzi: [
          "`INT(2)`",
          "`FLOAT(2)`",
          "`DECIMAL(8,2)`",
          "`VARCHAR(8)`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`DECIMAL` przechowuje liczby dokładnie, bez błędów zaokrągleń typowych dla `FLOAT`. `(8,2)` to 8 cyfr, w tym 2 po przecinku.",
      },
      {
        pytanie: "Czym różni się `CHAR(10)` od `VARCHAR(10)`?",
        odpowiedzi: [
          "`VARCHAR` nie może zawierać polskich znaków",
          "`CHAR` ma stałą długość i dopełnia tekst spacjami, `VARCHAR` zajmuje tyle, ile ma tekst",
          "nie ma różnicy, to synonimy",
          "`CHAR` przechowuje tylko jeden znak",
        ],
        poprawna: 1,
        wyjasnienie:
          "`CHAR(n)` zawsze rezerwuje `n` znaków, `VARCHAR(n)` ma zmienną długość do `n`.",
      },
      {
        pytanie: "Atrybut `AUTO_INCREMENT` przy kolumnie `id` sprawia, że",
        odpowiedzi: [
          "kolumna nie może zawierać liczb",
          "wartości są losowe i unikalne",
          "po każdym `SELECT` wartość rośnie o 1",
          "przy dodawaniu wiersza baza sama nada kolejny numer",
        ],
        poprawna: 3,
        wyjasnienie:
          "`AUTO_INCREMENT` automatycznie nadaje kolejne liczby całkowite nowym wierszom.",
      },
      {
        pytanie:
          "Które zapytanie poprawnie zmieni cenę produktu o `id` równym 4 na 49.90?",
        odpowiedzi: [
          "`UPDATE produkty VALUES (cena = 49.90) WHERE id = 4;`",
          "`SET produkty cena = 49.90 WHERE id = 4;`",
          "`UPDATE produkty SET cena = 49.90 WHERE id = 4;`",
          "`ALTER TABLE produkty SET cena = 49.90 WHERE id = 4;`",
        ],
        poprawna: 2,
        wyjasnienie:
          "Składnia: `UPDATE tabela SET kolumna = wartość WHERE warunek;`.",
      },
      {
        pytanie: "Co się stanie po wykonaniu `DELETE FROM klienci;`?",
        odpowiedzi: [
          "polecenie się nie wykona, bo brakuje `WHERE`",
          "zostanie usunięta tabela `klienci` razem ze strukturą",
          "zostanie usunięty tylko pierwszy wiersz",
          "zostaną usunięte wszystkie wiersze tabeli `klienci`",
        ],
        poprawna: 3,
        wyjasnienie:
          "`DELETE` bez `WHERE` usuwa wszystkie wiersze, ale tabela zostaje.",
      },
      {
        pytanie: "Które zapytanie policzy wszystkie wiersze w tabeli `Koty`?",
        odpowiedzi: [
          "`SELECT COUNT(Koty) AS ROWNUM;`",
          "`SELECT COUNT(*) FROM Koty;`",
          "`SELECT SUM(*) FROM Koty;`",
          "`SELECT ROWNUM() FROM Koty;`",
        ],
        poprawna: 1,
        wyjasnienie:
          "`COUNT(*)` zlicza wiersze. `SUM` sumuje wartości liczbowe.",
      },
      {
        pytanie: "Klauzula `HAVING` w zapytaniu SQL służy do",
        odpowiedzi: [
          "filtrowania grup utworzonych przez `GROUP BY`",
          "sortowania wyników",
          "ograniczania liczby wierszy w wyniku",
          "łączenia tabel",
        ],
        poprawna: 0,
        wyjasnienie:
          "`WHERE` filtruje wiersze przed grupowaniem, `HAVING` — grupy po grupowaniu (może zawierać funkcje agregujące).",
      },
      {
        pytanie: "Które zapytanie wyświetli 5 produktów o najwyższej cenie?",
        odpowiedzi: [
          "`SELECT nazwa, MAX(cena) FROM produkty LIMIT 5;`",
          "`SELECT TOP nazwa, cena FROM produkty LIMIT 5 ORDER BY cena;`",
          "`SELECT nazwa, cena FROM produkty ORDER BY cena DESC LIMIT 5;`",
          "`SELECT nazwa, cena FROM produkty ORDER BY cena ASC LIMIT 5;`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`DESC` sortuje malejąco (od najwyższej), `LIMIT 5` bierze 5 pierwszych. `LIMIT` jest zawsze na końcu.",
      },
      {
        pytanie:
          "Jaki wynik zwróci `SELECT DISTINCT miasto FROM klienci;` dla miast: Kraków, Warszawa, Kraków, Gdańsk?",
        odpowiedzi: [
          "3 wiersze: Kraków, Warszawa, Gdańsk",
          "tylko wiersz Kraków",
          "1 wiersz z liczbą 3",
          "4 wiersze z powtórzonym Krakowem",
        ],
        poprawna: 0,
        wyjasnienie: "`DISTINCT` usuwa powtarzające się wiersze z wyniku.",
      },
      {
        pytanie: "Warunek `cena BETWEEN 40 AND 300` jest równoważny warunkowi",
        odpowiedzi: [
          "`cena >= 40 OR cena <= 300`",
          "`cena >= 40 AND cena <= 300`",
          "`cena > 40 AND cena < 300`",
          "`cena IN (40, 300)`",
        ],
        poprawna: 1,
        wyjasnienie: "`BETWEEN` obejmuje oba końce przedziału.",
      },
      {
        pytanie:
          "Jak poprawnie wybrać klientów, którzy nie mają podanego adresu e-mail?",
        odpowiedzi: [
          "`WHERE email = ''`",
          "`WHERE email == NULL`",
          "`WHERE email = NULL`",
          "`WHERE email IS NULL`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Porównanie z `NULL` przez `=` nigdy nie daje prawdy. Używamy `IS NULL` / `IS NOT NULL`.",
      },
      {
        pytanie:
          "Funkcja `CONCAT(imie, ' ', nazwisko)` zwróci dla Anny Kowalskiej",
        odpowiedzi: [
          "`Anna Kowalska`",
          "liczbę znaków imienia i nazwiska",
          "`AnnaKowalska`",
          "`Anna, Kowalska`",
        ],
        poprawna: 0,
        wyjasnienie:
          "`CONCAT` łączy podane teksty, a `' '` dodaje spację między nimi.",
      },
      {
        pytanie:
          "Które złączenie zwróci wszystkich klientów, także tych bez zamówień?",
        odpowiedzi: [
          "`klienci JOIN zamowienia`",
          "`klienci LEFT JOIN zamowienia ON klienci.id = zamowienia.klient_id`",
          "`klienci INNER JOIN zamowienia ON klienci.id = zamowienia.klient_id`",
          "`zamowienia INNER JOIN klienci ON zamowienia.id = klienci.id`",
        ],
        poprawna: 1,
        wyjasnienie:
          "`LEFT JOIN` zachowuje wszystkie wiersze lewej tabeli, a brakujące dane prawej uzupełnia `NULL`.",
      },
      {
        pytanie:
          "Co zwróci zapytanie `SELECT * FROM klienci, zamowienia;` bez warunku złączenia?",
        odpowiedzi: [
          "błąd składni",
          "tylko pierwszą tabelę",
          "iloczyn kartezjański — każdy klient z każdym zamówieniem",
          "tylko klientów, którzy mają zamówienia",
        ],
        poprawna: 2,
        wyjasnienie:
          "Bez warunku `WHERE`/`ON` każdy wiersz pierwszej tabeli łączy się z każdym wierszem drugiej.",
      },
      {
        pytanie:
          "Które polecenie utworzy użytkownika `anna` łączącego się tylko z lokalnego komputera?",
        odpowiedzi: [
          "`CREATE USER anna PASSWORD 'haslo' ON localhost;`",
          "`INSERT USER 'anna'@'localhost' VALUES ('haslo');`",
          "`ADD USER 'anna' TO localhost WITH 'haslo';`",
          "`CREATE USER 'anna'@'localhost' IDENTIFIED BY 'haslo';`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Składnia: `CREATE USER 'nazwa'@'host' IDENTIFIED BY 'hasło';`.",
      },
      {
        pytanie:
          "Które polecenie nada użytkownikowi `jan` prawo tylko do odczytu i aktualizacji tabeli `produkt` w bazie `obuwie`?",
        odpowiedzi: [
          "`GRANT ALL ON obuwie.produkt TO 'jan'@'localhost';`",
          "`REVOKE SELECT, UPDATE ON obuwie.produkt FROM 'jan'@'localhost';`",
          "`GRANT SELECT, UPDATE ON obuwie.produkt TO 'jan'@'localhost';`",
          "`GRANT SELECT, UPDATE ON obuwie.* TO 'jan'@'localhost';`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`SELECT` to przeglądanie, `UPDATE` to aktualizacja; `obuwie.produkt` ogranicza prawa do jednej tabeli. `REVOKE` odbiera prawa.",
      },
      {
        pytanie:
          "Klauzula `WITH GRANT OPTION` w poleceniu `GRANT` oznacza, że użytkownik",
        odpowiedzi: [
          "otrzymuje uprawnienia tylko tymczasowo",
          "może przekazywać otrzymane uprawnienia innym użytkownikom",
          "dostaje wszystkie uprawnienia na serwerze",
          "może zalogować się bez hasła",
        ],
        poprawna: 1,
        wyjasnienie:
          "`GRANT OPTION` to prawo nadawania swoich uprawnień innym.",
      },
      {
        pytanie: "Które polecenie odbierze użytkownikowi prawo `DELETE`?",
        odpowiedzi: [
          "`GRANT NO DELETE ON sklep.* TO 'jan'@'localhost';`",
          "`REVOKE DELETE ON sklep.* TO 'jan'@'localhost';`",
          "`DROP DELETE FROM 'jan'@'localhost';`",
          "`REVOKE DELETE ON sklep.* FROM 'jan'@'localhost';`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Uprawnienia odbiera `REVOKE … FROM`. `GRANT` używa `TO`, `REVOKE` używa `FROM`.",
      },
      {
        pytanie: "Polecenie `ROLLBACK` w transakcji",
        odpowiedzi: [
          "wycofuje zmiany wykonane od początku transakcji",
          "usuwa bazę danych",
          "zatwierdza wszystkie zmiany",
          "odtwarza bazę z kopii zapasowej",
        ],
        poprawna: 0,
        wyjasnienie:
          "`COMMIT` zatwierdza, `ROLLBACK` wycofuje niezatwierdzone zmiany.",
      },
      {
        pytanie: "Litera A w skrócie ACID oznacza",
        odpowiedzi: [
          "agregację danych",
          "atomowość — transakcja wykonuje się w całości albo wcale",
          "automatyczne zatwierdzanie",
          "autoryzację użytkownika",
        ],
        poprawna: 1,
        wyjasnienie:
          "ACID: Atomowość, Spójność (Consistency), Izolacja, Trwałość (Durability).",
      },
      {
        pytanie:
          "Które narzędzie służy do wykonania kopii zapasowej bazy MySQL/MariaDB z wiersza poleceń?",
        odpowiedzi: [
          "`mysqlshow`",
          "`mysqlimport`",
          "`mysqldump`",
          "`mysqlcheck`",
        ],
        poprawna: 2,
        wyjasnienie:
          "`mysqldump` zapisuje strukturę i dane do pliku `.sql`. `mysqlcheck` sprawdza i optymalizuje tabele.",
      },
      {
        pytanie: "Indeks założony na kolumnie `nazwisko`",
        odpowiedzi: [
          "przyspiesza wyszukiwanie i sortowanie po tej kolumnie",
          "szyfruje dane w kolumnie",
          "zabrania wpisywania wartości `NULL`",
          "automatycznie sortuje tabelę na dysku alfabetycznie",
        ],
        poprawna: 0,
        wyjasnienie:
          "Indeks to struktura pomocnicza, która przyspiesza odczyt kosztem miejsca i wolniejszego zapisu.",
      },
      {
        pytanie: "Widok (`VIEW`) w bazie danych to",
        odpowiedzi: [
          "tabela przechowująca własne dane na dysku",
          "graficzny diagram relacji",
          "kopia zapasowa tabeli",
          "wirtualna tabela tworzona na podstawie zapytania `SELECT`",
        ],
        poprawna: 3,
        wyjasnienie:
          "Widok nie przechowuje danych — przy każdym użyciu wykonuje zapisane zapytanie.",
      },
      {
        pytanie:
          "W phpMyAdmin plik `baza.sql` z arkusza egzaminacyjnego wczytasz do utworzonej bazy za pomocą zakładki",
        odpowiedzi: ["Struktura", "Eksport", "Operacje", "Import"],
        poprawna: 3,
        wyjasnienie:
          "Import wczytuje plik `.sql`. Eksport służy do zapisania bazy do pliku.",
      },
      {
        pytanie:
          "Na diagramie bazy biblioteki występują `czytelnik`, `ksiazka` i `wypozyczenie`. W modelu ER są to",
        odpowiedzi: ["dziedziny", "encje", "krotki", "atrybuty"],
        poprawna: 1,
        wyjasnienie:
          "Encja to obiekt, o którym przechowujemy dane (w bazie — tabela). Atrybuty to jej cechy (kolumny).",
      },
      {
        pytanie: "Operator reszty z dzielenia w MySQL to",
        odpowiedzi: ["`%`", "`/`", "`||`", "`&`"],
        poprawna: 0,
        wyjasnienie: "`10 % 3` daje 1. To samo robi funkcja `MOD(10, 3)`.",
      },
    ],
  },
  {
    id: "egzamin",
    nazwa: "Egzamin INF.03",
    opis: "Wszystko o samym egzaminie: zasady, progi, przebieg części praktycznej, plan nauki i ściągi, a także zagadnienia z testu spoza kodu — grafika, multimedia, CMS, protokoły, licencje, testowanie i dostępność.",
    dzialy: [
      {
        id: "egzamin-o-egzaminie",
        tytul: "Egzamin krok po kroku",
        tematy: [
          {
            id: "egzamin-jak-wyglada",
            tytul: "Jak wygląda egzamin INF.03",
            skrot:
              "Dwie części egzaminu, czas, progi zdawalności, certyfikat i dyplom zawodowy.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**INF.03** to kwalifikacja „Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych”. Zdają ją uczniowie w zawodach **technik informatyk** (razem z INF.02) i **technik programista** (razem z INF.04). Egzamin odbywa się według podstawy programowej z 2019 r. (tzw. formuła 2019).",
              },
              {
                typ: "p",
                tekst:
                  "Egzamin ma **dwie części**. Aby zdać, trzeba zaliczyć **obie**.",
              },
              {
                typ: "tabela",
                naglowki: ["", "Część pisemna", "Część praktyczna"],
                wiersze: [
                  [
                    "Forma",
                    "test na komputerze",
                    "zadanie praktyczne przy komputerze",
                  ],
                  [
                    "Zadania",
                    "40 pytań zamkniętych, 4 odpowiedzi, 1 poprawna",
                    "jedno duże zadanie: baza danych + strona + skrypt",
                  ],
                  [
                    "Czas",
                    "60 minut",
                    "150 minut (+10 minut na zapoznanie się z arkuszem, niewliczone)",
                  ],
                  [
                    "Próg zdania",
                    "co najmniej **50%** (min. 20 poprawnych odpowiedzi)",
                    "co najmniej **75%** punktów",
                  ],
                  ["Waga w wyniku", "30%", "70%"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Jeśli zdasz obie części, okręgowa komisja egzaminacyjna (OKE) liczy wynik ze wzoru `W = 0,3 × Wp + 0,7 × Wpr` (Wp — wynik z części pisemnej, Wpr — z praktycznej).",
              },
              {
                typ: "h",
                tekst: "Certyfikat i dyplom",
              },
              {
                typ: "lista",
                elementy: [
                  "Po zdaniu egzaminu dostajesz **certyfikat kwalifikacji zawodowej** INF.03.",
                  "**Dyplom zawodowy** (tytuł technika) otrzymasz, gdy masz certyfikaty ze **wszystkich** kwalifikacji w zawodzie (np. INF.02 i INF.03 dla technika informatyka) oraz wykształcenie średnie lub średnie branżowe (świadectwo ukończenia szkoły).",
                  "Jeśli nie zdasz jednej części, w kolejnych terminach powtarzasz **tylko tę część**. Po 5 latach od pierwszego podejścia trzeba zdawać cały egzamin od nowa.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Zapamiętaj liczby: **40 pytań / 60 minut / 50%** oraz **150 minut / 75%**. Część praktyczna waży więcej i ma wyższy próg — to na niej najczęściej się „odpada”, więc ćwicz całe arkusze na czas.",
              },
              {
                typ: "uwaga",
                tekst:
                  "Szczegóły organizacyjne (daty, sale, godziny) zawsze sprawdzaj w komunikatach CKE i w swojej szkole — mogą się zmieniać co sesję.",
              },
            ],
          },
          {
            id: "egzamin-czesc-pisemna",
            tytul: "Część pisemna — strategia",
            skrot:
              "Jak działa test na komputerze i jak mądrze rozwiązać 40 pytań w 60 minut.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Test rozwiązujesz w elektronicznym systemie egzaminacyjnym. Na każde pytanie są 4 odpowiedzi, tylko jedna jest dobra. Za złą odpowiedź **nie ma punktów ujemnych**.",
              },
              {
                typ: "lista",
                elementy: [
                  "Pytania możesz rozwiązywać w **dowolnej kolejności**.",
                  "Do każdego pytania możesz **wrócić i zmienić** odpowiedź.",
                  "Pytania bez odpowiedzi są oznaczone na **czerwono**; system pokazuje też licznik odpowiedzi i pozostały czas.",
                  "Gdy odpowiesz na wszystkie 40 pytań, możesz zakończyć test przyciskiem **Zakończ egzamin**.",
                ],
              },
              {
                typ: "h",
                tekst: "Strategia na 60 minut",
              },
              {
                typ: "kroki",
                elementy: [
                  "Pierwsze przejście (ok. 30 min): odpowiadaj na pytania, których jesteś pewien. Trudne zostaw na później.",
                  "Drugie przejście (ok. 20 min): wróć do pominiętych. Odrzucaj odpowiedzi na pewno złe — zostają 2, a szansa rośnie do 50%.",
                  "Ostatnie minuty: sprawdź, czy **żadne pytanie nie jest czerwone**. Puste pytanie to pewne 0 punktów — zgadnij.",
                ],
              },
              {
                typ: "h",
                tekst: "Na co uważać",
              },
              {
                typ: "lista",
                elementy: [
                  "**Zaprzeczenia**: „Który znacznik **nie** służy do…”. Czytaj pytanie do końca.",
                  "**Kod z błędem**: często 3 odpowiedzi różnią się jednym znakiem (`;`, cudzysłów, `$`). Czytaj kod znak po znaku.",
                  "**Wyniki pętli**: rozpisz krok po kroku kolejne wartości zmiennych — nie zgaduj „na oko”.",
                  "**Obrazki**: pytania o schemat blokowy, wygląd strony albo tabelę bazy — porównaj dokładnie wszystkie szczegóły.",
                ],
              },
              {
                typ: "tabela",
                naglowki: ["Dział", "Co najczęściej pada"],
                wiersze: [
                  [
                    "HTML",
                    "znaczniki, atrybuty, formularze, tabele, semantyka, meta",
                  ],
                  [
                    "CSS",
                    "selektory, model pudełkowy, kolory, `display`, `position`, pseudoklasy",
                  ],
                  [
                    "JavaScript",
                    "pętle, warunki, DOM, `getElementById`, zdarzenia, tablice",
                  ],
                  [
                    "PHP",
                    "zmienne `$`, pętle, tablice, `$_POST`/`$_GET`, sesje, cookies, `mysqli_*`",
                  ],
                  [
                    "SQL",
                    "`SELECT` z `WHERE`/`LIKE`/`ORDER BY`, `JOIN`, `ALTER TABLE`, `GRANT`, klucze, normalizacja",
                  ],
                  [
                    "Inne",
                    "grafika (RGB, CMYK, formaty), multimedia, licencje, CMS, protokoły, testowanie, algorytmy",
                  ],
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Najlepszy trening to rozwiązywanie **pełnych testów 40 pytań** na stronach z bazami pytań INF.03. Celuj w stały wynik 75% i więcej — wtedy masz zapas na stres.",
              },
            ],
          },
          {
            id: "egzamin-czesc-praktyczna",
            tytul: "Część praktyczna — przebieg i oddawanie pracy",
            skrot:
              "Folder z numerem PESEL, import bazy, 4 zapytania ze zrzutami, grafika, strona, skrypt i płyta z wynikami.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Zadanie praktyczne INF.03 to zawsze **mała aplikacja internetowa**: baza danych + strona HTML/CSS + skrypt PHP (czasem JavaScript). Pracujesz w pakiecie **XAMPP** (Apache, MariaDB, PHP, phpMyAdmin), w **edytorze z kolorowaniem składni** (np. Notepad++ lub VS Code), w **edytorze grafiki rastrowej** i w przeglądarce.",
              },
              {
                typ: "h",
                tekst: "Przebieg na podstawie arkuszy CKE",
              },
              {
                typ: "kroki",
                elementy: [
                  "Masz **10 minut** na przeczytanie arkusza i sprawdzenie stanowiska (nie wlicza się do 150 minut).",
                  "Logujesz się na konto **Egzamin** (bez hasła). Na pulpicie jest archiwum (ZIP lub 7z) zabezpieczone hasłem podanym w arkuszu — rozpakuj je.",
                  "Na pulpicie tworzysz folder nazwany **numerem PESEL** (numerem zdającego). Tam umieszczasz rozpakowane pliki i **wszystkie** wyniki pracy.",
                  "**Baza danych**: w phpMyAdmin tworzysz bazę o podanej nazwie (z polskim kodowaniem, np. `utf8_unicode_ci`), importujesz `baza.sql`, robisz zrzut ekranu `import`.",
                  "**Zapytania**: wykonujesz 4 zapytania SQL, ich treść zapisujesz w `kwerendy.txt`, a wyniki na zrzutach `kw1`, `kw2`, `kw3`, `kw4` (cały ekran z paskiem zadań, format PNG lub JPEG — jak w arkuszu).",
                  "**Grafika**: np. przeskalowanie obrazu z zachowaniem proporcji, wykadrowanie albo dodanie napisu.",
                  "**Witryna**: plik `.html` lub `.php` zgodny z rysunkiem układu bloków, z zewnętrznym arkuszem CSS.",
                  "**Skrypt**: PHP łączący się z bazą (`localhost`, `root`, bez hasła) i wysyłający zapytania z punktu 5 — albo skrypt JavaScript liczący coś po kliknięciu przycisku.",
                  "Tworzysz plik `przeglądarka.txt` z nazwą przeglądarki, w której testowałeś stronę.",
                  "**Nagrywasz płytę** z zawartością folderu, sprawdzasz jej odczyt, opisujesz numerem PESEL i zostawiasz na stanowisku z arkuszem. Rób dokładnie to, co mówi arkusz.",
                ],
              },
              {
                typ: "h",
                tekst: "Typowe zapytania z arkuszy",
              },
              {
                typ: "tabela",
                naglowki: ["Zapytanie", "Przykład w stylu arkuszy CKE"],
                wiersze: [
                  [
                    "wybór kolumn z warunkiem",
                    "`SELECT kolor, material FROM produkt WHERE wysokosc > 10;`",
                  ],
                  [
                    "złączenie („posłuż się relacją”)",
                    "`SELECT nazwa, opis, zrodlo FROM wycieczki JOIN zdjecia ON wycieczki.zdjecia_id = zdjecia.id;`",
                  ],
                  [
                    "sortowanie i limit",
                    "`SELECT nazwa, punkty FROM gry ORDER BY punkty DESC LIMIT 5;`",
                  ],
                  ["funkcja agregująca", "`SELECT COUNT(*) FROM wycieczki;`"],
                  [
                    "zmiana struktury",
                    "`ALTER TABLE wycieczki ADD ocena INT;`",
                  ],
                  [
                    "wstawienie / zmiana / usunięcie",
                    "`INSERT INTO`, `UPDATE`, `DELETE`",
                  ],
                  [
                    "użytkownik i prawa",
                    "`CREATE USER 'Marek'@'localhost' IDENTIFIED BY 'M@reK';` + `GRANT`",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Jak oceniają pracę",
              },
              {
                typ: "p",
                tekst:
                  "Arkusz wymienia zwykle **5 ocenianych rezultatów**, np.: operacje na bazie danych, zawartość witryny, działanie witryny, styl CSS, skrypt. Każdy rezultat ma listę drobnych kryteriów (np. „jest tytuł strony”, „zapytanie 2 poprawne”, „obraz ma tekst alternatywny”). Za każde spełnione kryterium dostajesz punkt, a do zdania potrzeba **75%** wszystkich punktów.",
              },
              {
                typ: "uwaga",
                tekst:
                  'Najczęstsze straty punktów: zła nazwa pliku lub folderu, kadrowany zrzut ekranu (musi być cały ekran z paskiem zadań), brak `lang="pl"` lub `charset`, brak `alt`, styl wpisany w HTML zamiast w zewnętrznym pliku CSS, brak zamknięcia połączenia z bazą, pliki zapisane poza folderem PESEL.',
              },
              {
                typ: "egzamin",
                tekst:
                  "Arkusz zawiera tabele pomocnicze: funkcje `mysqli_*` w PHP, metody DOM w JavaScript, funkcje SQL, znaczniki semantyczne HTML. Korzystaj z nich — nazwy funkcji masz podane, nie musisz ich pamiętać co do znaku.",
              },
              {
                typ: "h",
                tekst: "Przykładowy plan 150 minut",
              },
              {
                typ: "tabela",
                naglowki: ["Czas", "Co robisz"],
                wiersze: [
                  [
                    "0-20 min",
                    "folder PESEL, import bazy, 4 zapytania, zrzuty, `kwerendy.txt`",
                  ],
                  ["20-30 min", "grafika"],
                  ["30-75 min", "HTML: szkielet, bloki, treść, formularze"],
                  ["75-100 min", "CSS według listy cech"],
                  ["100-135 min", "skrypt PHP lub JS"],
                  [
                    "135-150 min",
                    "sprawdzenie w przeglądarce, lista plików, `przeglądarka.txt`, płyta",
                  ],
                ],
              },
            ],
          },
          {
            id: "egzamin-plan-nauki",
            tytul: "Plan nauki",
            skrot:
              "Proponowana kolejność działów i plan tygodniowy przygotowań do INF.03.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "Ucz się w takiej kolejności, w jakiej powstaje zadanie praktyczne: najpierw struktura strony, potem wygląd, dane i na końcu skrypty. Teorię z testu powtarzaj codziennie po trochu.",
              },
              {
                typ: "tabela",
                naglowki: ["Tydzień", "Temat główny", "Ćwiczenie"],
                wiersze: [
                  [
                    "1",
                    "HTML: szkielet, semantyka, listy, tabele, obrazy, linki, formularze",
                    "przepisz układ strony z dowolnego arkusza",
                  ],
                  [
                    "2",
                    "CSS: selektory, model pudełkowy, kolory, czcionki, `float`/`flex`, `@media`",
                    "dokończ wygląd strony z tygodnia 1",
                  ],
                  [
                    "3",
                    "SQL: `SELECT`, `WHERE`, `ORDER BY`, funkcje, `JOIN`, `INSERT`/`UPDATE`/`DELETE`",
                    "zrób część „Operacje na bazie danych” z 5 arkuszy",
                  ],
                  [
                    "4",
                    "SQL: `ALTER`, `CREATE USER`, `GRANT`; PHP: `mysqli_connect`, `mysqli_query`, pętla `while`",
                    "skrypt wypisujący dane z bazy w liście lub tabeli",
                  ],
                  [
                    "5",
                    "PHP: formularze `POST`/`GET`, `isset`, `INSERT` z formularza; JavaScript: DOM, zdarzenia, funkcje",
                    "skrypty z 3 arkuszy",
                  ],
                  [
                    "6",
                    "Grafika, multimedia, licencje, protokoły, testowanie (dział „Inne zagadnienia”)",
                    "testy 40 pytań co drugi dzień",
                  ],
                  [
                    "7-8",
                    "Pełne arkusze praktyczne na czas (150 min)",
                    "minimum 6 arkuszy + codziennie 1 test 40 pytań",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Zasady skutecznej nauki",
              },
              {
                typ: "lista",
                elementy: [
                  "Codziennie 20-30 minut testu — błędne pytania wpisuj do zeszytu i wracaj do nich.",
                  "Arkusze praktyczne pisz **samodzielnie**, bez podglądania rozwiązań, z włączonym stoperem.",
                  "Po każdym arkuszu sprawdź się z kryteriami oceniania — znajdź, gdzie tracisz punkty.",
                  "Ćwicz na tym samym oprogramowaniu co na egzaminie: XAMPP, phpMyAdmin, edytor z kolorowaniem składni.",
                  "Naucz się na pamięć szkieletu HTML5 i wzoru połączenia z bazą w PHP — oszczędzisz 10 minut.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Cel na tydzień przed egzaminem: test teoretyczny stabilnie powyżej 30/40 i arkusz praktyczny skończony w 120 minut, żeby zostało 30 minut na sprawdzanie.",
              },
            ],
          },
        ],
      },
      {
        id: "egzamin-sciagi",
        tytul: "Ściągi — najczęstsze rzeczy",
        tematy: [
          {
            id: "egzamin-sciaga-html-css",
            tytul: "Ściąga: HTML i CSS",
            skrot:
              "Szkielet strony, najważniejsze znaczniki i właściwości CSS potrzebne na części praktycznej.",
            tresc: [
              {
                typ: "kod",
                jezyk: "html",
                kod: '<!DOCTYPE html>\n<html lang="pl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Gry komputerowe</title>\n  <link rel="stylesheet" href="styl.css">\n</head>\n<body>\n  <header>\n    <h1>Ranking gier</h1>\n  </header>\n  <main>\n    <section id="lewy"></section>\n    <section id="prawy"></section>\n  </main>\n  <footer>\n    <p>Stronę wykonał: 01234567890</p>\n  </footer>\n</body>\n</html>',
                tytul: "Szkielet strony z arkusza",
              },
              {
                typ: "tabela",
                naglowki: ["Wymaganie z arkusza", "Jak zapisać"],
                wiersze: [
                  ["język polski", '`<html lang="pl">`'],
                  ["kodowanie polskich znaków", '`<meta charset="UTF-8">`'],
                  ["tytuł na karcie", "`<title>…</title>`"],
                  [
                    "zewnętrzny CSS",
                    '`<link rel="stylesheet" href="styl.css">`',
                  ],
                  [
                    "bloki semantyczne",
                    "`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<article>`, `<footer>`",
                  ],
                  [
                    "obraz z tekstem alternatywnym i dymkiem",
                    '`<img src="a.jpg" alt="opis" title="dymek">`',
                  ],
                  [
                    "odnośnik",
                    '`<a href="http://adres.pl" target="_blank">tekst</a>`',
                  ],
                  [
                    "listy",
                    "`<ul>` punktowana, `<ol>` numerowana, `<dl>` + `<dt>`/`<dd>` definicji",
                  ],
                  [
                    "formularz metodą bezpieczną",
                    '`<form action="strona.php" method="post">`',
                  ],
                  [
                    "pole z etykietą",
                    '`<label for="x">Nazwa</label> <input type="text" id="x" name="x">`',
                  ],
                  ["przycisk", '`<button type="submit">DODAJ</button>`'],
                  [
                    "tabela",
                    "`<table>`, `<tr>`, `<th>`, `<td>`, `colspan`, `rowspan`",
                  ],
                ],
              },
              {
                typ: "tabela",
                naglowki: ["CSS — wymaganie", "Właściwość"],
                wiersze: [
                  [
                    "krój / rozmiar czcionki",
                    "`font-family: Garamond;` `font-size: 120%;`",
                  ],
                  [
                    "kolor tekstu / tła",
                    "`color: white;` `background-color: Indigo;`",
                  ],
                  [
                    "marginesy wewnętrzne / zewnętrzne",
                    "`padding: 5px;` `margin: 10px;`",
                  ],
                  ["wyrównanie tekstu", "`text-align: center;`"],
                  [
                    "obramowanie, zaokrąglenie",
                    "`border: 1px solid black;` `border-radius: 50%;`",
                  ],
                  [
                    "bloki obok siebie",
                    "`float: left;` albo kontener z `display: flex;`",
                  ],
                  ["zawsze widoczne paski przewijania", "`overflow: scroll;`"],
                  ["zmiana po najechaniu kursorem", "`a:hover { … }`"],
                  [
                    "inny układ dla wąskiego ekranu",
                    "`@media (max-width: 800px) { … }`",
                  ],
                  ["cień", "`box-shadow: 5px 5px 10px gray;`"],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "Kolejność w `padding`/`margin` z 4 wartościami: **góra, prawo, dół, lewo** (zgodnie z ruchem wskazówek zegara).",
              },
            ],
          },
          {
            id: "egzamin-sciaga-sql-php-js",
            tytul: "Ściąga: SQL, PHP i JavaScript",
            skrot:
              "Wzory zapytań, schemat skryptu PHP z mysqli i obsługa formularza oraz podstawowy skrypt JS.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Cel", "SQL"],
                wiersze: [
                  ["wybór z warunkiem", "`SELECT a, b FROM t WHERE c > 10;`"],
                  ["wzorzec", "`WHERE nazwa LIKE 'K%'`"],
                  ["sortowanie i limit", "`ORDER BY punkty DESC LIMIT 5`"],
                  ["złączenie", "`FROM t1 JOIN t2 ON t1.t2_id = t2.id`"],
                  [
                    "liczenie / suma / średnia",
                    "`COUNT(*)`, `SUM(x)`, `AVG(x)`",
                  ],
                  ["grupowanie", "`GROUP BY kategoria HAVING COUNT(*) > 1`"],
                  [
                    "dodanie wiersza",
                    "`INSERT INTO t (a, b) VALUES ('x', 5);`",
                  ],
                  [
                    "zmiana / usunięcie",
                    "`UPDATE t SET a = 1 WHERE id = 2;` `DELETE FROM t WHERE id = 2;`",
                  ],
                  ["nowa kolumna", "`ALTER TABLE t ADD ocena INT;`"],
                  [
                    "użytkownik i prawa",
                    "`CREATE USER 'u'@'localhost' IDENTIFIED BY 'h';` `GRANT SELECT ON b.t TO 'u'@'localhost';`",
                  ],
                ],
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: "<?php\n$polaczenie = mysqli_connect('localhost', 'root', '', 'gry');\n$zapytanie = \"SELECT nazwa, punkty FROM gry ORDER BY punkty DESC LIMIT 5\";\n$wynik = mysqli_query($polaczenie, $zapytanie);\nwhile ($wiersz = mysqli_fetch_array($wynik)) {\n    echo \"<li>\" . $wiersz['nazwa'] . \" <span>\" . $wiersz['punkty'] . \"</span></li>\";\n}\nmysqli_close($polaczenie);\n?>",
                tytul: "Skrypt PHP: dane z bazy w elementach listy",
              },
              {
                typ: "kod",
                jezyk: "php",
                kod: "<?php\nif (!empty($_POST['nazwa'])) {\n    $polaczenie = mysqli_connect('localhost', 'root', '', 'gry');\n    $nazwa = $_POST['nazwa'];\n    $cena = $_POST['cena'];\n    $zapytanie = \"INSERT INTO gry (nazwa, cena, punkty) VALUES ('$nazwa', '$cena', 0)\";\n    mysqli_query($polaczenie, $zapytanie);\n    mysqli_close($polaczenie);\n}\n?>",
                tytul: "Skrypt PHP: obsługa formularza",
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "function oblicz() {\n  const kwota = Number(document.getElementById('kwota').value);\n  const raty = Number(document.getElementById('raty').value);\n  const wynik = (kwota / raty).toFixed(2);\n  document.getElementById('wynik').innerHTML = 'Rata: ' + wynik + ' zł';\n}",
                tytul:
                  'Skrypt JS: obliczenie po kliknięciu (onclick="oblicz()")',
              },
              {
                typ: "tabela",
                naglowki: ["Element", "PHP", "JavaScript"],
                wiersze: [
                  ["zmienna", "`$x = 5;`", "`let x = 5;` / `const x = 5;`"],
                  ["łączenie tekstu", "`.`", "`+`"],
                  ["wypisanie", "`echo`", "`innerHTML`, `console.log()`"],
                  [
                    "dane z formularza",
                    "`$_POST['pole']`, `$_GET['pole']`",
                    "`document.getElementById('pole').value`",
                  ],
                  ["czy istnieje", "`isset($x)`, `!empty($x)`", "`if (x)`"],
                  ["zaokrąglenie", "`round($x, 2)`", "`x.toFixed(2)`"],
                ],
              },
              {
                typ: "uwaga",
                tekst:
                  "W PHP pamiętaj o `$` przed zmienną i `;` po każdej instrukcji. W zapytaniu SQL wstawianym w PHP teksty z formularza muszą być w apostrofach: `'$nazwa'`.",
              },
            ],
          },
        ],
      },
      {
        id: "egzamin-inne",
        tytul: "Inne zagadnienia z testu",
        tematy: [
          {
            id: "egzamin-grafika",
            tytul: "Grafika komputerowa",
            skrot:
              "Grafika rastrowa i wektorowa, modele barw, głębia koloru, rozdzielczość, formaty i kompresja.",
            tresc: [
              {
                typ: "h",
                tekst: "Rastrowa czy wektorowa",
              },
              {
                typ: "tabela",
                naglowki: [
                  "",
                  "Grafika rastrowa (bitmapowa)",
                  "Grafika wektorowa",
                ],
                wiersze: [
                  [
                    "Z czego się składa",
                    "siatka **pikseli**",
                    "obiekty opisane matematycznie: linie, krzywe Béziera, figury",
                  ],
                  [
                    "Skalowanie",
                    "przy powiększaniu traci jakość (widać piksele)",
                    "**bez utraty jakości**",
                  ],
                  [
                    "Zastosowanie",
                    "zdjęcia, obrazy fotorealistyczne",
                    "logo, ikony, schematy, czcionki",
                  ],
                  [
                    "Formaty",
                    "JPG, PNG, GIF, BMP, TIFF, WebP",
                    "SVG, AI, CDR, EPS",
                  ],
                  [
                    "Programy",
                    "GIMP, Adobe Photoshop, Paint",
                    "Inkscape, CorelDRAW, Adobe Illustrator",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Modele barw",
              },
              {
                typ: "tabela",
                naglowki: ["Model", "Składowe", "Gdzie"],
                wiersze: [
                  [
                    "**RGB**",
                    "czerwony, zielony, niebieski — model **addytywny** (mieszanie światła; wszystkie na max = biały)",
                    "monitory, strony WWW",
                  ],
                  [
                    "**CMYK**",
                    "cyjan, magenta, żółty, czarny — model **subtraktywny** (mieszanie farb)",
                    "**druk**",
                  ],
                  [
                    "**HSL / HSV (HSB)**",
                    "barwa (odcień, 0-360°), nasycenie, jasność",
                    "dobieranie kolorów, CSS `hsl()`",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "W CSS kolor biały to `#FFFFFF`, `rgb(255, 255, 255)` lub `hsl(0, 0%, 100%)`. Każda składowa RGB ma wartość 0-255 (szesnastkowo 00-FF).",
              },
              {
                typ: "h",
                tekst: "Głębia koloru i rozdzielczość",
              },
              {
                typ: "tabela",
                naglowki: ["Głębia (bity na piksel)", "Liczba kolorów"],
                wiersze: [
                  ["1 bit", "2 (czarno-biały)"],
                  ["8 bitów", "256 (paleta, np. GIF)"],
                  ["16 bitów", "65 536 (High Color)"],
                  [
                    "24 bity",
                    "16 777 216 ≈ 16,7 mln (True Color, 3 × 8 bitów)",
                  ],
                  [
                    "32 bity",
                    "True Color + 8-bitowy **kanał alfa** (przezroczystość)",
                  ],
                ],
              },
              {
                typ: "lista",
                elementy: [
                  "**Rozdzielczość obrazu** — liczba pikseli, np. 1920 × 1080.",
                  "**DPI / PPI** — punkty (piksele) na cal. Do druku zwykle 300 dpi, na ekran wystarcza znacznie mniej.",
                  "**Kanał alfa** — dodatkowa informacja o przezroczystości każdego piksela.",
                ],
              },
              {
                typ: "h",
                tekst: "Formaty plików",
              },
              {
                typ: "tabela",
                naglowki: ["Format", "Kompresja", "Cechy"],
                wiersze: [
                  [
                    "JPEG (JPG)",
                    "**stratna**",
                    "zdjęcia, 16,7 mln kolorów, brak przezroczystości",
                  ],
                  [
                    "PNG",
                    "bezstratna",
                    "przezroczystość (kanał alfa), grafika na WWW, zrzuty ekranu",
                  ],
                  [
                    "GIF",
                    "bezstratna (LZW)",
                    "max **256 kolorów**, **animacje**, przezroczystość jednego koloru",
                  ],
                  [
                    "WebP",
                    "stratna lub bezstratna",
                    "mniejsze pliki niż JPG/PNG, przezroczystość, animacja",
                  ],
                  [
                    "SVG",
                    "— (tekst XML)",
                    "**wektorowy**, można osadzić w HTML",
                  ],
                  ["BMP", "zwykle brak", "duże pliki, mapa bitowa Windows"],
                  [
                    "TIFF",
                    "bezstratna lub brak",
                    "druk, skanowanie, wysoka jakość",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Operacje w edytorze grafiki",
              },
              {
                typ: "lista",
                elementy: [
                  "**Skalowanie z zachowaniem proporcji** — zmieniasz szerokość, wysokość zmienia się sama (kłódka/łańcuch).",
                  "**Kadrowanie** — wycięcie fragmentu obrazu.",
                  "**Desaturacja** — usunięcie kolorów, zostają odcienie szarości.",
                  "**Warstwy** — osobne poziomy obrazu, np. tekst nad zdjęciem.",
                  "**Renderowanie** — tworzenie obrazu wynikowego (np. strony lub sceny 3D) do wyświetlenia.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Typowe pytania: „model barw dla druku” — CMYK; „format z animacją” — GIF; „format wektorowy” — SVG; „przezroczystość” — kanał alfa / PNG; „ile kolorów przy 8 bitach” — 256; „duży obraz spowalnia stronę” — zmniejsz go w programie graficznym, a nie atrybutami HTML.",
              },
            ],
          },
          {
            id: "egzamin-multimedia",
            tytul: "Dźwięk i wideo",
            skrot:
              "Cyfryzacja dźwięku, próbkowanie, przepływność (kbps), formaty audio i wideo, kodeki i kontenery.",
            tresc: [
              {
                typ: "h",
                tekst: "Dźwięk cyfrowy",
              },
              {
                typ: "p",
                tekst:
                  "Dźwięk analogowy zamieniamy na cyfrowy w trzech krokach: **próbkowanie** (pomiar co pewien czas), **kwantyzacja** (zaokrąglenie wartości do poziomów) i **kodowanie** (zapis w bitach).",
              },
              {
                typ: "tabela",
                naglowki: ["Parametr", "Znaczenie", "Przykład"],
                wiersze: [
                  [
                    "częstotliwość próbkowania",
                    "ile pomiarów na sekundę (Hz)",
                    "płyta CD: **44,1 kHz**, wideo: 48 kHz",
                  ],
                  [
                    "rozdzielczość bitowa",
                    "ile bitów na jedną próbkę",
                    "CD: 16 bitów",
                  ],
                  ["liczba kanałów", "mono (1), stereo (2), 5.1", "CD: stereo"],
                  [
                    "przepływność (bitrate)",
                    "ile danych na sekundę, w **kbps** (kilobitach na sekundę)",
                    "MP3: 128-320 kbps; CD: ok. 1411 kbps",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Przepływność CD: 44 100 próbek × 16 bitów × 2 kanały = 1 411 200 b/s ≈ 1411 kbps. Im wyższy bitrate, tym lepsza jakość i większy plik.",
              },
              {
                typ: "tabela",
                naglowki: ["Format audio", "Kompresja", "Uwagi"],
                wiersze: [
                  ["WAV", "zwykle brak (PCM)", "duże pliki, pełna jakość"],
                  [
                    "FLAC",
                    "**bezstratna**",
                    "mniejszy niż WAV, bez utraty jakości",
                  ],
                  ["MP3", "stratna", "najpopularniejszy"],
                  [
                    "AAC",
                    "stratna",
                    "lepszy od MP3 przy tym samym bitrate, używany w MP4",
                  ],
                  ["OGG (Vorbis), Opus", "stratna", "otwarte, darmowe formaty"],
                  [
                    "MIDI",
                    "—",
                    "nie zawiera nagrania, tylko instrukcje: jaka nuta, instrument, czas",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Wideo: kontener i kodek",
              },
              {
                typ: "lista",
                elementy: [
                  "**Kodek** — algorytm, który koduje (kompresuje) i dekoduje obraz lub dźwięk, np. H.264, H.265 (HEVC), VP9, AV1, MP3, AAC.",
                  "**Kontener** — plik, który łączy obraz, dźwięk i napisy, np. **MP4**, **WebM**, MKV, AVI, MOV.",
                  "**FPS** — liczba klatek na sekundę (np. 25, 30, 60).",
                ],
              },
              {
                typ: "tabela",
                naglowki: [
                  "Znacznik HTML5",
                  "Formaty obsługiwane przez przeglądarki",
                ],
                wiersze: [
                  ["`<audio>`", "MP3, WAV, OGG"],
                  ["`<video>`", "MP4 (H.264), WebM, Ogg"],
                ],
              },
              {
                typ: "kod",
                jezyk: "html",
                kod: '<video src="film.mp4" width="640" controls autoplay muted loop></video>\n<audio controls>\n  <source src="muzyka.mp3" type="audio/mpeg">\n  <source src="muzyka.ogg" type="audio/ogg">\n</audio>',
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania: „bezstratny format audio” — FLAC (lub WAV bez kompresji); „co oznacza 320 kbps” — przepływność bitową; „próbkowanie CD” — 44,1 kHz; „MP4 to…” — kontener multimedialny.",
              },
            ],
          },
          {
            id: "egzamin-cms-hosting",
            tytul: "CMS, hosting, domeny i protokoły",
            skrot:
              "Systemy zarządzania treścią, rodzaje hostingu, DNS i domeny, protokoły HTTP/HTTPS/FTP oraz kody odpowiedzi.",
            tresc: [
              {
                typ: "h",
                tekst: "CMS — system zarządzania treścią",
              },
              {
                typ: "p",
                tekst:
                  "**CMS** (Content Management System) to gotowa aplikacja do prowadzenia strony bez pisania kodu. Treść dodaje się w **panelu administracyjnym**, wygląd zmienia się **motywem (szablonem)**, a funkcje — **wtyczkami** (rozszerzeniami).",
              },
              {
                typ: "lista",
                elementy: [
                  "**WordPress** — najpopularniejszy CMS, napisany w PHP, dane w MySQL/MariaDB; blogi i strony firmowe.",
                  "**Joomla**, **Drupal** — inne CMS-y oparte na PHP.",
                  "Sklepy internetowe: **PrestaShop**, **WooCommerce** (wtyczka do WordPressa), Magento.",
                ],
              },
              {
                typ: "h",
                tekst: "Hosting i domena",
              },
              {
                typ: "tabela",
                naglowki: ["Pojęcie", "Wyjaśnienie"],
                wiersze: [
                  [
                    "hosting współdzielony",
                    "wiele stron na jednym serwerze — tani, wystarcza dla małych stron",
                  ],
                  [
                    "VPS",
                    "wirtualny serwer z własnymi zasobami i dostępem administratora",
                  ],
                  [
                    "serwer dedykowany",
                    "cała fizyczna maszyna dla jednego klienta",
                  ],
                  [
                    "chmura",
                    "zasoby wynajmowane elastycznie, płatne za użycie",
                  ],
                  [
                    "domena",
                    "nazwa strony, np. `sklep.pl`; `.pl`, `.com` to domeny najwyższego poziomu (TLD)",
                  ],
                  ["subdomena", "np. `blog.sklep.pl`"],
                  ["DNS", "system tłumaczący nazwy domen na adresy IP"],
                  [
                    "certyfikat SSL/TLS",
                    "potrzebny do HTTPS — szyfruje połączenie, kłódka w przeglądarce",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Protokoły i porty",
              },
              {
                typ: "tabela",
                naglowki: ["Protokół", "Port", "Do czego"],
                wiersze: [
                  ["HTTP", "80", "przesyłanie stron WWW (bez szyfrowania)"],
                  ["HTTPS", "443", "strony WWW z szyfrowaniem TLS"],
                  [
                    "FTP",
                    "21",
                    "przesyłanie plików na serwer (np. program **FileZilla**)",
                  ],
                  [
                    "SFTP / SSH",
                    "22",
                    "bezpieczne przesyłanie plików / zdalna konsola",
                  ],
                  ["SMTP", "25 (587)", "wysyłanie poczty"],
                  ["POP3 / IMAP", "110 / 143", "odbieranie poczty"],
                  ["DNS", "53", "zamiana nazw na adresy IP"],
                  ["MySQL / MariaDB", "3306", "serwer bazy danych"],
                ],
              },
              {
                typ: "h",
                tekst: "Kody odpowiedzi HTTP",
              },
              {
                typ: "tabela",
                naglowki: ["Kod", "Znaczenie"],
                wiersze: [
                  ["200 OK", "wszystko w porządku"],
                  ["301 / 302", "przekierowanie stałe / tymczasowe"],
                  ["403 Forbidden", "brak dostępu"],
                  ["404 Not Found", "nie ma takiej strony"],
                  [
                    "500 Internal Server Error",
                    "błąd po stronie serwera (np. w skrypcie)",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Lokalny serwer (XAMPP) działa pod adresem `localhost` = `127.0.0.1`. Pliki strony umieszcza się w folderze `htdocs`.",
              },
              {
                typ: "egzamin",
                tekst:
                  "„Program FileZilla służy do…” — publikacji (przesłania) strony na serwer przez FTP. „Przykład CMS” — WordPress, Joomla. phpMyAdmin to narzędzie do bazy danych, a XAMPP to pakiet serwerowy — **nie** są CMS-ami.",
              },
            ],
          },
          {
            id: "egzamin-licencje",
            tytul: "Prawo autorskie i licencje",
            skrot:
              "Rodzaje licencji oprogramowania (GPL, freeware, shareware…), Creative Commons i podstawy prawa autorskiego.",
            tresc: [
              {
                typ: "tabela",
                naglowki: ["Licencja", "Co wolno"],
                wiersze: [
                  [
                    "**GPL** (GNU General Public License)",
                    "wolne oprogramowanie: kod źródłowy jest dostępny, można go używać, zmieniać i rozpowszechniać, ale wersje zmienione muszą też być na GPL (copyleft)",
                  ],
                  [
                    "MIT, BSD, Apache",
                    "otwarte licencje „liberalne” — kod można wykorzystać nawet w programie zamkniętym, trzeba zachować informację o autorach",
                  ],
                  [
                    "**freeware**",
                    "program darmowy do używania, ale zwykle bez kodu źródłowego i bez prawa do zmian",
                  ],
                  [
                    "**shareware**",
                    "darmowy do wypróbowania (ograniczony czas lub funkcje), potem trzeba zapłacić",
                  ],
                  [
                    "trial / demo",
                    "wersja próbna — pełna przez określony czas (trial) albo z ograniczonymi funkcjami (demo)",
                  ],
                  ["adware", "darmowy, ale wyświetla reklamy"],
                  [
                    "public domain",
                    "domena publiczna — brak majątkowych praw autorskich, wolno wszystko",
                  ],
                  [
                    "licencja komercyjna (własnościowa)",
                    "płatna, bez kodu źródłowego; np. BOX (pudełkowa) lub OEM (sprzedawana z komputerem)",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Creative Commons (CC)",
              },
              {
                typ: "p",
                tekst:
                  "Licencje CC dotyczą utworów (zdjęć, tekstów, muzyki). Składają się z elementów:",
              },
              {
                typ: "tabela",
                naglowki: ["Skrót", "Nazwa", "Znaczenie"],
                wiersze: [
                  [
                    "BY",
                    "uznanie autorstwa",
                    "trzeba podać autora (występuje w każdej licencji CC)",
                  ],
                  [
                    "SA",
                    "na tych samych warunkach",
                    "utwór zależny musi mieć tę samą licencję",
                  ],
                  [
                    "NC",
                    "użycie niekomercyjne",
                    "nie wolno zarabiać na utworze",
                  ],
                  ["ND", "bez utworów zależnych", "nie wolno zmieniać utworu"],
                  ["CC0", "domena publiczna", "autor zrzeka się praw"],
                ],
              },
              {
                typ: "h",
                tekst: "Prawo autorskie w Polsce — w skrócie",
              },
              {
                typ: "lista",
                elementy: [
                  "**Autorskie prawa osobiste** (np. prawo do podpisania utworu) — nie można ich zbyć ani się ich zrzec, nie wygasają.",
                  "**Autorskie prawa majątkowe** (prawo do zarabiania na utworze) — można je sprzedać; trwają zwykle 70 lat po śmierci autora.",
                  "**Dozwolony użytek** — np. prawo cytatu z podaniem autora i źródła.",
                  "Program komputerowy jest chroniony jak utwór literacki. Kopia zapasowa legalnego programu jest dozwolona.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "Pytania: „licencja, która pozwala modyfikować i rozpowszechniać kod pod warunkiem zachowania tej samej licencji” — GPL; „program do wypróbowania, potem płatny” — shareware; „darmowy bez kodu źródłowego” — freeware; „CC BY-NC” — uznanie autorstwa, użycie niekomercyjne.",
              },
            ],
          },
          {
            id: "egzamin-testowanie-seo",
            tytul: "Testowanie, walidacja, SEO i dostępność",
            skrot:
              "Rodzaje testów, walidator W3C, narzędzia deweloperskie, pozycjonowanie strony i wytyczne WCAG.",
            tresc: [
              {
                typ: "h",
                tekst: "Testowanie",
              },
              {
                typ: "tabela",
                naglowki: ["Rodzaj testu", "Opis"],
                wiersze: [
                  ["jednostkowe", "sprawdzają pojedyncze funkcje lub klasy"],
                  ["integracyjne", "sprawdzają współpracę modułów"],
                  ["systemowe", "cała aplikacja jako całość"],
                  [
                    "akceptacyjne",
                    "klient sprawdza, czy aplikacja spełnia wymagania",
                  ],
                  ["alfa", "wewnątrz firmy, przez programistów/testerów"],
                  [
                    "beta",
                    "przez wybranych użytkowników zewnętrznych przed wydaniem",
                  ],
                  [
                    "wydajnościowe / obciążeniowe",
                    "szybkość i działanie przy wielu użytkownikach",
                  ],
                  [
                    "czarnej skrzynki / białej skrzynki",
                    "bez znajomości kodu / ze znajomością kodu",
                  ],
                  [
                    "regresyjne",
                    "czy po zmianach nie zepsuło się to, co działało",
                  ],
                ],
              },
              {
                typ: "lista",
                elementy: [
                  "**Walidator W3C** (validator.w3.org) sprawdza poprawność kodu HTML, a **W3C CSS Validator** — kodu CSS.",
                  "**Narzędzia deweloperskie** przeglądarki (`F12`) — podgląd HTML i CSS, konsola błędów JavaScript, sieć, widok responsywny.",
                  "**Debuger** — uruchamianie kodu krok po kroku, **punkty przerwania** (breakpoint), podgląd wartości zmiennych.",
                  "Testuj stronę w kilku przeglądarkach i na różnych szerokościach ekranu.",
                ],
              },
              {
                typ: "h",
                tekst: "SEO — pozycjonowanie",
              },
              {
                typ: "p",
                tekst:
                  "**SEO** to działania, dzięki którym strona jest wyżej w wynikach wyszukiwarki.",
              },
              {
                typ: "lista",
                elementy: [
                  'unikalny `<title>` i `<meta name="description" content="opis strony">` (opis widoczny w wynikach),',
                  "jeden `<h1>`, logiczne nagłówki `<h2>`-`<h6>`, znaczniki semantyczne,",
                  "tekst alternatywny `alt` w obrazach, przyjazne adresy URL,",
                  "szybkie ładowanie (małe obrazy), wersja mobilna (RWD), HTTPS,",
                  "pliki `robots.txt` (co roboty mogą indeksować) i `sitemap.xml` (mapa strony).",
                ],
              },
              {
                typ: "p",
                tekst:
                  "Nieuczciwe techniki (tzw. black hat SEO), np. ukryty tekst czy upychanie słów kluczowych, mogą skończyć się karą od wyszukiwarki. Znacznik `meta keywords` jest dziś ignorowany przez Google.",
              },
              {
                typ: "h",
                tekst: "Dostępność — WCAG",
              },
              {
                typ: "p",
                tekst:
                  "**WCAG** (Web Content Accessibility Guidelines) to wytyczne, jak tworzyć strony dostępne dla osób z niepełnosprawnościami. W Polsce strony instytucji publicznych muszą spełniać WCAG 2.1 na poziomie **AA**.",
              },
              {
                typ: "tabela",
                naglowki: ["Zasada WCAG", "Przykład"],
                wiersze: [
                  [
                    "postrzegalność",
                    "`alt` dla obrazów, napisy do filmów, kontrast tekstu",
                  ],
                  [
                    "funkcjonalność",
                    "obsługa całej strony klawiaturą, brak migających elementów",
                  ],
                  [
                    "zrozumiałość",
                    'prosty język, `lang="pl"`, czytelne komunikaty błędów, `<label>` przy polach',
                  ],
                  [
                    "solidność (kompatybilność)",
                    "poprawny kod, działanie z czytnikami ekranu",
                  ],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Poziomy zgodności: **A** (minimum), **AA** (standard), **AAA** (najwyższy).",
              },
              {
                typ: "egzamin",
                tekst:
                  "„Znacznik meta description zawiera” — opis zawartości strony. „Testy beta przeprowadzają” — użytkownicy spoza zespołu. „Do sprawdzenia zgodności kodu ze standardem służy” — walidator W3C.",
              },
            ],
          },
          {
            id: "egzamin-projektowanie",
            tytul: "RWD, frameworki, Git i praca w zespole",
            skrot:
              "Responsywność i mobile first, frameworki i biblioteki, podstawy systemu kontroli wersji Git.",
            tresc: [
              {
                typ: "h",
                tekst: "RWD — strona responsywna",
              },
              {
                typ: "p",
                tekst:
                  "**RWD** (Responsive Web Design) — strona dopasowuje układ do szerokości ekranu: na komputerze kolumny obok siebie, na telefonie jedna pod drugą.",
              },
              {
                typ: "kod",
                jezyk: "css",
                kod: "section {\n  width: 100%;\n}\n@media (min-width: 800px) {\n  section {\n    width: 50%;\n    float: left;\n  }\n}",
              },
              {
                typ: "lista",
                elementy: [
                  '`<meta name="viewport" content="width=device-width, initial-scale=1.0">` — konieczny dla telefonów,',
                  "jednostki względne: `%`, `em`, `rem`, `vw`, `vh`; elastyczne układy `flex` i `grid`,",
                  "**Mobile first** — najpierw projektujemy wersję na telefon, a dla większych ekranów dodajemy reguły `@media (min-width: …)`,",
                  "**Desktop first** — odwrotnie, z regułami `@media (max-width: …)`.",
                ],
              },
              {
                typ: "h",
                tekst: "Frameworki i biblioteki",
              },
              {
                typ: "tabela",
                naglowki: ["Narzędzie", "Co to jest"],
                wiersze: [
                  [
                    "Bootstrap",
                    "framework CSS (i JS): gotowe klasy, siatka **12 kolumn**, responsywność",
                  ],
                  [
                    "Tailwind CSS",
                    "framework CSS z małymi klasami narzędziowymi",
                  ],
                  ["jQuery", "biblioteka JS ułatwiająca obsługę DOM i zdarzeń"],
                  [
                    "React, Angular, Vue",
                    "biblioteki/frameworki JS do budowy interfejsów aplikacji",
                  ],
                  ["Laravel, Symfony", "frameworki PHP"],
                  [
                    "Node.js",
                    "środowisko uruchamiania JavaScriptu po stronie serwera",
                  ],
                ],
              },
              {
                typ: "h",
                tekst: "Git — kontrola wersji",
              },
              {
                typ: "tabela",
                naglowki: ["Polecenie", "Działanie"],
                wiersze: [
                  ["`git init`", "tworzy nowe repozytorium"],
                  ["`git clone adres`", "kopiuje repozytorium z serwera"],
                  ["`git add plik`", "dodaje zmiany do przygotowania"],
                  [
                    '`git commit -m "opis"`',
                    "zapisuje migawkę zmian w historii",
                  ],
                  [
                    "`git push` / `git pull`",
                    "wysyła zmiany na serwer / pobiera zmiany z serwera",
                  ],
                  ["`git branch`, `git merge`", "gałęzie i ich scalanie"],
                ],
              },
              {
                typ: "p",
                tekst:
                  "Repozytoria zdalne przechowuje się np. w serwisach **GitHub** lub **GitLab**. System kontroli wersji pozwala wrócić do starszej wersji i pracować kilku osobom nad tym samym kodem.",
              },
              {
                typ: "h",
                tekst: "Praca zespołowa",
              },
              {
                typ: "lista",
                elementy: [
                  "**Model kaskadowy** — etapy jeden po drugim: analiza, projekt, implementacja, testy, wdrożenie.",
                  "**Metodyki zwinne (Agile, Scrum)** — praca w krótkich cyklach (sprintach), częste poprawki według uwag klienta.",
                  "Dokumentacja kodu, ustalone nazewnictwo i komentarze ułatwiają pracę innym.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "„Strona dopasowuje się do rozdzielczości urządzenia” — RWD. „Siatka Bootstrapa” — 12 kolumn. „System kontroli wersji” — Git.",
              },
            ],
          },
          {
            id: "egzamin-algorytmy",
            tytul: "Algorytmy i schematy blokowe",
            skrot:
              "Kształty bloków na schemacie, sposoby zapisu algorytmu, kompilacja i interpretacja.",
            tresc: [
              {
                typ: "p",
                tekst:
                  "**Algorytm** to skończony ciąg kroków prowadzący do rozwiązania problemu. Można go zapisać jako listę kroków, **pseudokod**, **schemat blokowy** albo w języku programowania.",
              },
              {
                typ: "h",
                tekst: "Bloki schematu blokowego",
              },
              {
                typ: "tabela",
                naglowki: ["Kształt", "Znaczenie", "Przykład treści"],
                wiersze: [
                  ["owal (elipsa)", "start lub stop", "START, STOP"],
                  ["prostokąt", "operacja (przetwarzanie)", "`n ← n + 5`"],
                  [
                    "**romb**",
                    "**warunek (decyzja)** — dwa wyjścia: TAK / NIE",
                    "`n > 20`",
                  ],
                  [
                    "równoległobok",
                    "wejście / wyjście danych",
                    "Wczytaj n, Wypisz n",
                  ],
                  [
                    "prostokąt z podwójnymi bokami",
                    "podprogram (procedura, funkcja)",
                    "Sortuj tablicę t",
                  ],
                  ["małe koło", "łącznik", "—"],
                ],
              },
              {
                typ: "h",
                tekst: "Pętle",
              },
              {
                typ: "lista",
                elementy: [
                  "pętla z warunkiem na początku (`while`) — może nie wykonać się ani razu,",
                  "pętla z warunkiem na końcu (`do…while`) — wykona się co najmniej raz,",
                  "pętla licznikowa (`for`) — gdy znamy liczbę powtórzeń.",
                ],
              },
              {
                typ: "kod",
                jezyk: "js",
                kod: "let suma = 0;\nfor (let i = 1; i <= 5; i++) {\n  suma += i;\n}\nconsole.log(suma);",
              },
              {
                typ: "p",
                tekst:
                  "Wynik: `15` (1 + 2 + 3 + 4 + 5). Na teście rozpisz tabelkę: `i` i `suma` po każdym obrocie pętli.",
              },
              {
                typ: "h",
                tekst: "Kompilacja i interpretacja",
              },
              {
                typ: "tabela",
                naglowki: ["", "Kompilator", "Interpreter"],
                wiersze: [
                  [
                    "Jak działa",
                    "tłumaczy cały program na kod maszynowy przed uruchomieniem",
                    "tłumaczy i wykonuje program na bieżąco, linia po linii",
                  ],
                  ["Przykłady języków", "C, C++", "PHP, JavaScript, Python"],
                ],
              },
              {
                typ: "lista",
                elementy: [
                  "**Rekurencja** — funkcja wywołuje samą siebie (np. silnia).",
                  "**Sortowanie bąbelkowe** — porównuje sąsiednie elementy i zamienia je miejscami.",
                  "**Wyszukiwanie liniowe** — sprawdza elementy po kolei.",
                ],
              },
              {
                typ: "egzamin",
                tekst:
                  "W teście bywa schemat blokowy z pytaniem, który blok jest warunkiem (romb) albo co wypisze algorytm. Wykonuj go „na kartce” krok po kroku.",
              },
            ],
          },
        ],
      },
    ],
    quiz: [
      {
        pytanie:
          "Ile minimum poprawnych odpowiedzi (z 40) trzeba udzielić, aby zdać część pisemną egzaminu zawodowego?",
        odpowiedzi: ["30", "24", "20", "16"],
        poprawna: 2,
        wyjasnienie:
          "Próg części pisemnej to 50% punktów, czyli co najmniej 20 z 40 zadań.",
      },
      {
        pytanie:
          "Jaki jest próg zaliczenia części praktycznej egzaminu zawodowego?",
        odpowiedzi: [
          "30% punktów",
          "50% punktów",
          "60% punktów",
          "75% punktów",
        ],
        poprawna: 3,
        wyjasnienie:
          "Część praktyczna wymaga co najmniej 75% możliwych do uzyskania punktów.",
      },
      {
        pytanie: "Który model barw jest stosowany w poligrafii (druku)?",
        odpowiedzi: ["RGBA", "CMYK", "RGB", "HSL"],
        poprawna: 1,
        wyjasnienie:
          "CMYK to model subtraktywny oparty na farbach: cyjan, magenta, żółty i czarny.",
      },
      {
        pytanie: "Ile kolorów można zapisać przy głębi koloru 8 bitów?",
        odpowiedzi: ["256", "16 777 216", "8", "65 536"],
        poprawna: 0,
        wyjasnienie:
          "2 do potęgi 8 = 256 kolorów. 24 bity dają ok. 16,7 mln kolorów.",
      },
      {
        pytanie:
          "Który format grafiki obsługuje animację i paletę maksymalnie 256 kolorów?",
        odpowiedzi: ["GIF", "SVG", "BMP", "JPEG"],
        poprawna: 0,
        wyjasnienie: "GIF ma paletę do 256 kolorów i może zawierać animację.",
      },
      {
        pytanie:
          "Który format grafiki rastrowej stosuje kompresję stratną i nie obsługuje przezroczystości?",
        odpowiedzi: ["GIF", "SVG", "PNG", "JPEG"],
        poprawna: 3,
        wyjasnienie:
          "JPEG kompresuje stratnie i nie ma kanału alfa. SVG jest formatem wektorowym.",
      },
      {
        pytanie: "Cechą grafiki wektorowej jest",
        odpowiedzi: [
          "przechowywanie zdjęć z aparatu cyfrowego",
          "możliwość skalowania bez utraty jakości",
          "stała rozdzielczość podana w dpi",
          "zapis obrazu jako siatki pikseli",
        ],
        poprawna: 1,
        wyjasnienie:
          "Obiekty wektorowe są opisane matematycznie, więc można je dowolnie powiększać.",
      },
      {
        pytanie: "Kanał alfa w grafice komputerowej przechowuje informację o",
        odpowiedzi: [
          "rozdzielczości obrazu",
          "jasności całego obrazu",
          "przezroczystości pikseli",
          "profilu kolorów drukarki",
        ],
        poprawna: 2,
        wyjasnienie:
          "Kanał alfa określa stopień przezroczystości każdego piksela, np. w PNG.",
      },
      {
        pytanie:
          "Która operacja w edytorze grafiki zamienia kolorowe zdjęcie na odcienie szarości?",
        odpowiedzi: ["desaturacja", "rozmycie", "kadrowanie", "skalowanie"],
        poprawna: 0,
        wyjasnienie:
          "Desaturacja usuwa nasycenie kolorów, zostawiając tylko jasność.",
      },
      {
        pytanie:
          "Na stronie umieszczono zdjęcie 4000 × 3000 px wyświetlane w rozmiarze 400 × 300 px. Jak najlepiej przyspieszyć ładowanie strony?",
        odpowiedzi: [
          "ustawić atrybuty `width` i `height` w HTML",
          "zmienić nazwę pliku na krótszą",
          "zmniejszyć obraz w programie graficznym",
          "ustawić szerokość w CSS w procentach",
        ],
        poprawna: 2,
        wyjasnienie:
          "Atrybuty HTML i CSS zmieniają tylko wyświetlany rozmiar — przeglądarka i tak pobiera cały duży plik.",
      },
      {
        pytanie:
          "Z jaką częstotliwością próbkowany jest dźwięk na płycie CD audio?",
        odpowiedzi: ["96 kHz", "22 kHz", "128 kHz", "44,1 kHz"],
        poprawna: 3,
        wyjasnienie: "Standard CD audio: 44,1 kHz, 16 bitów, stereo.",
      },
      {
        pytanie: "Który format zapisu dźwięku stosuje kompresję bezstratną?",
        odpowiedzi: ["AAC", "FLAC", "OGG Vorbis", "MP3"],
        poprawna: 1,
        wyjasnienie:
          "FLAC zmniejsza plik bez utraty jakości. MP3, AAC i Vorbis to formaty stratne.",
      },
      {
        pytanie: "Oznaczenie 320 kbps przy pliku MP3 informuje o",
        odpowiedzi: [
          "częstotliwości próbkowania",
          "przepływności bitowej — liczbie kilobitów na sekundę nagrania",
          "rozmiarze pliku w kilobajtach",
          "liczbie kanałów dźwięku",
        ],
        poprawna: 1,
        wyjasnienie:
          "Bitrate określa, ile danych przypada na sekundę dźwięku; wyższy bitrate to lepsza jakość.",
      },
      {
        pytanie: "Kodek multimedialny to",
        odpowiedzi: [
          "urządzenie do nagrywania płyt",
          "plik łączący obraz, dźwięk i napisy",
          "algorytm kodujący i dekodujący dane audio lub wideo",
          "rodzaj licencji na filmy",
        ],
        poprawna: 2,
        wyjasnienie:
          "Kodek (np. H.264, AAC) kompresuje i dekompresuje dane. Plik łączący strumienie to kontener (np. MP4).",
      },
      {
        pytanie: "Przykładem systemu zarządzania treścią (CMS) jest",
        odpowiedzi: ["WordPress", "phpMyAdmin", "FileZilla", "XAMPP"],
        poprawna: 0,
        wyjasnienie:
          "WordPress to CMS. phpMyAdmin zarządza bazą, FileZilla to klient FTP, XAMPP to pakiet serwerowy.",
      },
      {
        pytanie: "Program FileZilla można wykorzystać do",
        odpowiedzi: [
          "walidacji kodu HTML",
          "edycji grafiki wektorowej",
          "zarządzania bazą danych strony",
          "publikacji strony internetowej na serwerze",
        ],
        poprawna: 3,
        wyjasnienie:
          "FileZilla to klient FTP/SFTP służący do przesyłania plików na serwer.",
      },
      {
        pytanie: "Który port jest domyślnie używany przez protokół HTTPS?",
        odpowiedzi: ["80", "3306", "21", "443"],
        poprawna: 3,
        wyjasnienie: "HTTP — 80, HTTPS — 443, FTP — 21, MySQL — 3306.",
      },
      {
        pytanie: "Zadaniem systemu DNS jest",
        odpowiedzi: [
          "przesyłanie plików na serwer",
          "szyfrowanie połączenia ze stroną",
          "tłumaczenie nazw domenowych na adresy IP",
          "przechowywanie bazy danych strony",
        ],
        poprawna: 2,
        wyjasnienie:
          "DNS zamienia nazwy, np. `sklep.pl`, na adresy IP serwerów.",
      },
      {
        pytanie: "Licencja GPL",
        odpowiedzi: [
          "zabrania kopiowania programu",
          "pozwala modyfikować i rozpowszechniać program, ale zmienione wersje muszą być udostępnione na tej samej licencji",
          "pozwala tylko na używanie programu bez dostępu do kodu",
          "pozwala używać programu za darmo przez 30 dni",
        ],
        poprawna: 1,
        wyjasnienie: "GPL to licencja wolnego oprogramowania typu copyleft.",
      },
      {
        pytanie:
          "Program udostępniany za darmo do wypróbowania, po okresie testowym płatny, jest rozpowszechniany na licencji",
        odpowiedzi: ["shareware", "public domain", "freeware", "GPL"],
        poprawna: 0,
        wyjasnienie:
          "Shareware można testować, a po okresie próbnym trzeba kupić licencję.",
      },
      {
        pytanie: "Licencja Creative Commons CC BY-NC oznacza",
        odpowiedzi: [
          "bez utworów zależnych i na tych samych warunkach",
          "domenę publiczną bez żadnych ograniczeń",
          "uznanie autorstwa i dowolne użycie komercyjne",
          "uznanie autorstwa i użycie niekomercyjne",
        ],
        poprawna: 3,
        wyjasnienie:
          "BY — trzeba podać autora, NC — nie wolno używać komercyjnie.",
      },
      {
        pytanie: "Które prawa autorskie są niezbywalne i nie wygasają?",
        odpowiedzi: [
          "prawa licencyjne OEM",
          "autorskie prawa osobiste",
          "prawa wydawcy",
          "autorskie prawa majątkowe",
        ],
        poprawna: 1,
        wyjasnienie:
          "Prawa osobiste (np. do autorstwa) nie mogą być sprzedane; majątkowe można przenieść i wygasają.",
      },
      {
        pytanie: "Wytyczne WCAG dotyczą",
        odpowiedzi: [
          "zasad pozycjonowania w wyszukiwarkach",
          "bezpieczeństwa haseł w bazach danych",
          "dostępności treści internetowych dla osób z niepełnosprawnościami",
          "szybkości ładowania stron",
        ],
        poprawna: 2,
        wyjasnienie:
          "WCAG (Web Content Accessibility Guidelines) opisuje, jak tworzyć strony dostępne dla wszystkich.",
      },
      {
        pytanie: "Testy beta oprogramowania przeprowadzają zwykle",
        odpowiedzi: [
          "wybrani użytkownicy spoza zespołu przed oficjalnym wydaniem",
          "klienci po zakończeniu wsparcia programu",
          "wyłącznie automatyczne skrypty na serwerze",
          "programiści podczas pisania pojedynczych funkcji",
        ],
        poprawna: 0,
        wyjasnienie:
          "Testy alfa robi zespół wewnętrzny, beta — zewnętrzni użytkownicy przed premierą.",
      },
      {
        pytanie: "Na schemacie blokowym blok w kształcie rombu oznacza",
        odpowiedzi: [
          "warunek (decyzję)",
          "wejście lub wyjście danych",
          "początek algorytmu",
          "operację przypisania",
        ],
        poprawna: 0,
        wyjasnienie:
          "Romb ma dwa wyjścia: TAK i NIE. Wejście/wyjście to równoległobok, start/stop — owal.",
      },
    ],
  },
];

const KOLEJNOSC = ["html", "css", "js", "php", "sql", "egzamin"];
const IKONY = {
  html: "&lt;/&gt;",
  css: "{ }",
  js: "JS",
  php: "PHP",
  sql: "SQL",
  egzamin: "EGZ",
};
const JEZYKI_KODU = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
  php: "PHP",
  sql: "SQL",
  text: "Tekst",
};
const LITERY = "ABCD";
const KLUCZ = "inf03-nauka-v1";
const TEST_ILE = 40;
const TEST_MINUTY = 60;
const TEST_PROG = 0.5;

const moduly = KOLEJNOSC.map((id) => DANE.find((m) => m.id === id)).filter(
  Boolean,
);
const jezyki = moduly.filter((m) => m.id !== "egzamin");
const egzaminMod = moduly.find((m) => m.id === "egzamin");

const tematy = [];
const tematyPoId = new Map();
moduly.forEach((m) => {
  m.dzialy.forEach((d, di) => {
    d.tematy.forEach((t) => {
      const wpis = { modul: m, dzial: d, dzialNr: di + 1, temat: t };
      tematy.push(wpis);
      tematyPoId.set(t.id, wpis);
    });
  });
});

const pytania = [];
moduly.forEach((m) => {
  (m.quiz || []).forEach((q, i) =>
    pytania.push({ ...q, klucz: m.id + ":" + i, modul: m.id }),
  );
});
const pytaniaPoKluczu = new Map(pytania.map((p) => [p.klucz, p]));

const stan = wczytajStan();
Object.keys(stan.bledy).forEach((k) => {
  if (!pytaniaPoKluczu.has(k)) delete stan.bledy[k];
});

const app = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const sidebarNav = document.getElementById("sidebarNav");
const scrim = document.getElementById("scrim");
const menuBtn = document.getElementById("menuBtn");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const toast = document.getElementById("toast");
const ogloszenia = document.getElementById("ogloszenia");
const dialog = document.getElementById("dialog");

const procent = new Intl.NumberFormat("pl-PL", {
  style: "percent",
  maximumFractionDigits: 0,
});
const liczba = new Intl.NumberFormat("pl-PL");
const dataFmt = new Intl.DateTimeFormat("pl-PL", {
  dateStyle: "medium",
  timeStyle: "short",
});

const quizy = {};
let test = null;
let timer = null;
let pierwszyRender = true;
let pomijajFokus = false;
let toastT = null;

function wczytajStan() {
  const pusty = {
    przerobione: {},
    bledy: {},
    wyniki: {},
    testy: [],
    ostatni: null,
  };
  try {
    const s = JSON.parse(localStorage.getItem(KLUCZ) || "null");
    if (s && typeof s === "object") return Object.assign(pusty, s);
  } catch (e) {
    return pusty;
  }
  return pusty;
}

function zapiszStan() {
  try {
    localStorage.setItem(KLUCZ, JSON.stringify(stan));
  } catch (e) {
    return false;
  }
  return true;
}

function esc(s) {
  return String(s == null ? "" : s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

function fmt(s) {
  const kody = [];
  let h = esc(s).replace(/`([^`]+)`/g, (m, c) => {
    kody.push(c);
    return "\u0000" + (kody.length - 1) + "\u0000";
  });
  h = h.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  return h.replace(
    /\u0000(\d+)\u0000/g,
    (m, i) => '<code translate="no">' + kody[i] + "</code>",
  );
}

function odmiana(n, formy) {
  if (n === 1) return formy[0];
  const d = n % 10;
  const s = n % 100;
  if (d >= 2 && d <= 4 && (s < 12 || s > 14)) return formy[1];
  return formy[2];
}

function ileTematow(n) {
  return liczba.format(n) + " " + odmiana(n, ["temat", "tematy", "tematów"]);
}

function ilePytan(n) {
  return liczba.format(n) + " " + odmiana(n, ["pytanie", "pytania", "pytań"]);
}

function tasuj(tab) {
  const t = tab.slice();
  for (let i = t.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [t[i], t[j]] = [t[j], t[i]];
  }
  return t;
}

function kolor(id) {
  return 'style="--mod:var(--c-' + esc(id) + ')"';
}

function tematyModulu(m) {
  return tematy.filter((t) => t.modul === m);
}

function postepModulu(m) {
  const lista = tematyModulu(m);
  const zrobione = lista.filter((t) => stan.przerobione[t.temat.id]).length;
  return {
    zrobione,
    wszystkie: lista.length,
    ulamek: lista.length ? zrobione / lista.length : 0,
  };
}

function pasek(ulamek, etykieta) {
  const p = Math.round(ulamek * 100);
  return (
    '<div class="bar" role="progressbar" aria-label="' +
    esc(etykieta) +
    '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' +
    p +
    '"><span style="transform:scaleX(' +
    ulamek.toFixed(3) +
    ')"></span></div>'
  );
}

function okruchy(elementy) {
  return (
    '<nav aria-label="Ścieżka"><ol class="crumbs">' +
    elementy
      .map(
        ([t, h]) =>
          "<li>" +
          (h
            ? '<a href="' + h + '">' + esc(t) + "</a>"
            : '<span aria-current="page">' + esc(t) + "</span>") +
          "</li>",
      )
      .join("") +
    "</ol></nav>"
  );
}

const REGULY = {
  js: [
    ["str", /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`/],
    [
      "key",
      /\b(?:let|const|var|function|return|if|else|for|while|do|switch|case|break|continue|new|typeof|instanceof|of|in|true|false|null|undefined|this|class|default|try|catch|finally|throw|async|await|NaN)\b/,
    ],
    ["num", /\b\d+(?:\.\d+)?\b/],
    ["fn", /\b[A-Za-z_$][\w$]*(?=\s*\()/],
  ],
  php: [
    ["key", /<\?php|<\?=|\?>/],
    ["str", /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/],
    ["tag", /<\/?[A-Za-z][\w-]*(?:\s[^<>]*)?>/],
    ["var", /\$[A-Za-z_]\w*/],
    [
      "key",
      /\b(?:echo|print|if|else|elseif|endif|for|foreach|endforeach|as|while|endwhile|do|switch|case|break|continue|function|return|true|false|null|TRUE|FALSE|NULL|new|require|require_once|include|include_once|global|and|or|xor|default|try|catch|static|const)\b/,
    ],
    ["num", /\b\d+(?:\.\d+)?\b/],
    ["fn", /\b[A-Za-z_]\w*(?=\s*\()/],
  ],
  sql: [
    ["str", /'(?:''|\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`[^`\n]*`/],
    [
      "fn",
      /\b(?:COUNT|SUM|AVG|MIN|MAX|CONCAT|UPPER|LOWER|LENGTH|SUBSTRING|SUBSTR|LEFT|RIGHT|NOW|CURDATE|CURTIME|YEAR|MONTH|DAY|DATEDIFF|DATE_FORMAT|ROUND|CEIL|FLOOR|ABS|RAND|IFNULL|COALESCE|TRIM|REPLACE|DATE|TIME|ADDDATE|DATE_ADD|DATE_SUB|POWER|SQRT|MOD|LCASE|UCASE|CHAR_LENGTH|INSTR|LOCATE|DAYNAME|MONTHNAME|WEEKDAY|DAYOFWEEK|TIMESTAMPDIFF)(?=\s*\()/,
    ],
    [
      "key",
      /\b(?:SELECT|FROM|WHERE|AND|OR|NOT|IN|IS|NULL|LIKE|BETWEEN|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|AS|ON|JOIN|INNER|LEFT|RIGHT|FULL|OUTER|CROSS|NATURAL|USING|UNION|ALL|DISTINCT|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|DATABASE|SCHEMA|TABLE|VIEW|INDEX|UNIQUE|PRIMARY|FOREIGN|KEY|REFERENCES|CONSTRAINT|DEFAULT|AUTO_INCREMENT|CHECK|ALTER|ADD|DROP|MODIFY|CHANGE|COLUMN|RENAME|TO|TRUNCATE|IF|EXISTS|ASC|DESC|USER|IDENTIFIED|GRANT|REVOKE|PRIVILEGES|WITH|OPTION|FLUSH|START|TRANSACTION|BEGIN|COMMIT|ROLLBACK|SAVEPOINT|CASCADE|RESTRICT|ENGINE|CHARSET|COLLATE|CHARACTER|UNSIGNED|SHOW|TABLES|DATABASES|DESCRIBE|USE|INT|INTEGER|TINYINT|SMALLINT|MEDIUMINT|BIGINT|DECIMAL|NUMERIC|FLOAT|DOUBLE|REAL|VARCHAR|CHAR|TEXT|TINYTEXT|MEDIUMTEXT|LONGTEXT|DATETIME|TIMESTAMP|YEAR|BOOLEAN|BOOL|ENUM|BLOB|TRUE|FALSE|ANY|SOME|CASE|WHEN|THEN|ELSE|END|PASSWORD|PROCEDURE|TRIGGER|FUNCTION|RETURNS|CALL|LOCK|UNLOCK|READ|WRITE|EXPLAIN)\b/i,
    ],
    ["fn", /\b[A-Za-z_]\w*(?=\()/],
    ["num", /\b\d+(?:\.\d+)?\b/],
  ],
  html: [
    ["tag", /<!DOCTYPE[^>]*>|<\/?[A-Za-z][\w-]*|\/?>/i],
    ["attr", /[A-Za-z_:@][-\w:.]*(?==)/],
    ["str", /"[^"\n]*"|'[^'\n]*'/],
  ],
};

const WYRAZENIA = {};
Object.keys(REGULY).forEach((j) => {
  WYRAZENIA[j] = new RegExp(
    REGULY[j].map((r) => "(" + r[1].source + ")").join("|"),
    j === "sql" ? "gi" : "g",
  );
});

function tokeny(kod, jezyk) {
  const re = WYRAZENIA[jezyk];
  const reguly = REGULY[jezyk];
  re.lastIndex = 0;
  let out = "";
  let ostatni = 0;
  let m;
  while ((m = re.exec(kod))) {
    if (m[0] === "") {
      re.lastIndex++;
      continue;
    }
    let g = 1;
    while (m[g] === undefined) g++;
    out +=
      esc(kod.slice(ostatni, m.index)) +
      '<span class="t-' +
      reguly[g - 1][0] +
      '">' +
      esc(m[0]) +
      "</span>";
    ostatni = m.index + m[0].length;
  }
  return out + esc(kod.slice(ostatni));
}

function wartoscCss(v) {
  const re =
    /(#[0-9a-fA-F]{3,8}\b)|("[^"]*"|'[^']*')|((?<![\w#-])-?\d*\.?\d+(?:px|em|rem|%|vh|vw|vmin|vmax|ms|s|deg|fr|pt|cm|mm|ch)?)|(!important)/g;
  let out = "";
  let ostatni = 0;
  let m;
  while ((m = re.exec(v))) {
    const klasa = m[1] ? "num" : m[2] ? "str" : m[3] ? "num" : "key";
    out +=
      esc(v.slice(ostatni, m.index)) +
      '<span class="t-' +
      klasa +
      '">' +
      esc(m[0]) +
      "</span>";
    ostatni = m.index + m[0].length;
  }
  return out + esc(v.slice(ostatni));
}

function deklaracjeCss(s) {
  const re = /([\w-]+)(\s*:\s*)([^;{}]+)/g;
  let out = "";
  let ostatni = 0;
  let m;
  while ((m = re.exec(s))) {
    out +=
      esc(s.slice(ostatni, m.index)) +
      '<span class="t-prop">' +
      esc(m[1]) +
      "</span>" +
      esc(m[2]) +
      wartoscCss(m[3]);
    ostatni = m.index + m[0].length;
  }
  return out + esc(s.slice(ostatni));
}

function kolorujCss(kod) {
  let glebokosc = 0;
  return kod
    .split("\n")
    .map((linia) => {
      let out;
      const i = linia.indexOf("{");
      if (i >= 0) {
        const sel = linia.slice(0, i);
        const klasa = sel.trim().startsWith("@") ? "key" : "sel";
        out =
          '<span class="t-' +
          klasa +
          '">' +
          esc(sel) +
          "</span>" +
          deklaracjeCss(linia.slice(i));
      } else if (glebokosc > 0) {
        out = deklaracjeCss(linia);
      } else {
        out = esc(linia);
      }
      glebokosc +=
        (linia.match(/\{/g) || []).length - (linia.match(/\}/g) || []).length;
      return out;
    })
    .join("\n");
}

function koloruj(kod, jezyk) {
  if (jezyk === "css") return kolorujCss(kod);
  if (WYRAZENIA[jezyk]) return tokeny(kod, jezyk);
  return esc(kod);
}

const STYL_PODGLADU =
  "html{height:auto}body{margin:12px;display:flow-root;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:16px;line-height:1.4;color:#111;background:#fff}";

function blok(b) {
  switch (b.typ) {
    case "p":
      return "<p>" + fmt(b.tekst) + "</p>";
    case "h":
      return "<h2>" + fmt(b.tekst) + "</h2>";
    case "lista":
      return (
        "<ul>" +
        (b.elementy || []).map((e) => "<li>" + fmt(e) + "</li>").join("") +
        "</ul>"
      );
    case "kroki":
      return (
        "<ol>" +
        (b.elementy || []).map((e) => "<li>" + fmt(e) + "</li>").join("") +
        "</ol>"
      );
    case "kod":
      return (
        '<figure class="code"><figcaption class="code-head"><span class="code-lang">' +
        esc(JEZYKI_KODU[b.jezyk] || b.jezyk) +
        "</span>" +
        (b.tytul
          ? '<span class="code-title">' + esc(b.tytul) + "</span>"
          : "") +
        '<button class="copy-btn" type="button" data-akcja="kopiuj">Kopiuj</button></figcaption><pre tabindex="0"><code translate="no">' +
        koloruj(b.kod || "", b.jezyk) +
        "</code></pre></figure>"
      );
    case "wynik": {
      const doc =
        '<!doctype html><html lang="pl"><head><meta charset="utf-8"><style>' +
        STYL_PODGLADU +
        "</style></head><body>" +
        (b.html || "") +
        "</body></html>";
      return (
        '<figure class="preview"><figcaption class="preview-head"><i></i><i></i><i></i><span>Efekt w przeglądarce</span></figcaption><iframe data-podglad title="Podgląd efektu kodu" sandbox="allow-same-origin" loading="lazy" srcdoc="' +
        esc(doc) +
        '"></iframe></figure>'
      );
    }
    case "tabela":
      return (
        '<div class="table-wrap" tabindex="0" role="region" aria-label="Tabela"><table><thead><tr>' +
        (b.naglowki || [])
          .map((h) => '<th scope="col">' + fmt(h) + "</th>")
          .join("") +
        "</tr></thead><tbody>" +
        (b.wiersze || [])
          .map(
            (r) =>
              "<tr>" +
              r.map((c) => "<td>" + fmt(c) + "</td>").join("") +
              "</tr>",
          )
          .join("") +
        "</tbody></table></div>"
      );
    case "egzamin":
      return (
        '<aside class="box box-exam"><span class="box-title">Na egzaminie</span><p>' +
        fmt(b.tekst) +
        "</p></aside>"
      );
    case "uwaga":
      return (
        '<aside class="box box-warn"><span class="box-title">Uwaga</span><p>' +
        fmt(b.tekst) +
        "</p></aside>"
      );
    default:
      return "";
  }
}

function norm(s) {
  const mapa = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return String(s)
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => mapa[c]);
}

function czysty(s) {
  return String(s || "")
    .replace(/`|\*\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function tekstBloku(b) {
  return [
    b.tekst,
    ...(b.elementy || []),
    b.kod,
    ...(b.naglowki || []),
    ...(b.wiersze || []).flat(),
  ]
    .filter(Boolean)
    .join(" ");
}

const indeks = tematy.map((w) => {
  const tytul = czysty(w.temat.tytul);
  const skrot = czysty(w.temat.skrot);
  const tekst = czysty(w.temat.tresc.map(tekstBloku).join(" "));
  return {
    w,
    tytul,
    skrot,
    tekst,
    nTytul: norm(tytul),
    nSkrot: norm(skrot),
    nTekst: norm(tekst),
  };
});

function szukaj(q) {
  const slowa = norm(q).split(/\s+/).filter(Boolean);
  if (!slowa.length) return { slowa, wyniki: [] };
  const wyniki = indeks
    .map((x) => {
      let pkt = 0;
      for (const s of slowa) {
        const wT = x.nTytul.includes(s);
        const wS = x.nSkrot.includes(s);
        const wX = x.nTekst.includes(s);
        if (!wT && !wS && !wX) return null;
        pkt += (wT ? 10 : 0) + (wS ? 4 : 0) + (wX ? 1 : 0);
      }
      if (x.nTytul.startsWith(slowa[0])) pkt += 5;
      return { x, pkt };
    })
    .filter(Boolean)
    .sort((a, b) => b.pkt - a.pkt)
    .slice(0, 50);
  return { slowa, wyniki };
}

function podswietl(tekst, slowa) {
  const n = norm(tekst);
  const zakresy = [];
  slowa.forEach((s) => {
    let i = n.indexOf(s);
    while (i >= 0 && s) {
      zakresy.push([i, i + s.length]);
      i = n.indexOf(s, i + s.length);
    }
  });
  zakresy.sort((a, b) => a[0] - b[0]);
  let out = "";
  let poz = 0;
  zakresy.forEach(([a, b]) => {
    if (a < poz) return;
    out +=
      esc(tekst.slice(poz, a)) + "<mark>" + esc(tekst.slice(a, b)) + "</mark>";
    poz = b;
  });
  return out + esc(tekst.slice(poz));
}

function fragment(x, slowa) {
  const i = x.nTekst.indexOf(slowa[0]);
  if (i < 0) return podswietl(x.skrot, slowa);
  const start = Math.max(0, i - 70);
  const kon = Math.min(x.tekst.length, i + 130);
  return (
    (start > 0 ? "…" : "") +
    podswietl(x.tekst.slice(start, kon), slowa) +
    (kon < x.tekst.length ? "…" : "")
  );
}

const FAKTY = [
  {
    tytul: "Część pisemna",
    punkty: [
      "Test na komputerze: 40 pytań zamkniętych.",
      "Każde pytanie ma 4 odpowiedzi, tylko 1 jest dobra.",
      "Czas: 60 minut.",
      "Zdajesz od 50% (20 z 40 pytań).",
    ],
  },
  {
    tytul: "Część praktyczna",
    punkty: [
      "Praca przy komputerze: baza danych, zapytania SQL, strona WWW i skrypt.",
      "Czas: 150 minut.",
      "Zdajesz od 75% punktów.",
      "Narzędzia: XAMPP, phpMyAdmin, edytor kodu i przeglądarka.",
    ],
  },
  {
    tytul: "Co musisz umieć",
    punkty: [
      "Zbudować stronę w HTML i CSS według rysunku.",
      "Napisać zapytania SQL i zrobić zrzuty ekranu.",
      "Napisać skrypt PHP z bazą danych lub skrypt JavaScript.",
      "Sprawdzić stronę w przeglądarce.",
    ],
  },
];

function kartaModulu(m) {
  const p = postepModulu(m);
  const najlepszy = stan.wyniki[m.id];
  return (
    '<article class="card" ' +
    kolor(m.id) +
    '><div class="card-head"><span class="card-icon" aria-hidden="true">' +
    IKONY[m.id] +
    '</span><h3><a href="#/m/' +
    m.id +
    '">' +
    esc(m.nazwa) +
    "</a></h3></div><p>" +
    fmt(m.opis) +
    '</p><div class="card-meta"><span>' +
    liczba.format(p.zrobione) +
    " / " +
    ileTematow(p.wszystkie) +
    "</span><span>" +
    (najlepszy != null
      ? "Quiz: " + procent.format(najlepszy)
      : ilePytan((m.quiz || []).length)) +
    "</span></div>" +
    pasek(p.ulamek, "Postęp: " + m.nazwa) +
    '<div class="card-actions"><a class="btn" href="#/m/' +
    m.id +
    '">Ucz się</a><a class="btn btn-ghost" href="#/quiz/' +
    m.id +
    '">Quiz</a></div></article>'
  );
}

function widokStart() {
  document.title = "INF.03 - Nauka do egzaminu";
  const zrobione = tematy.filter((t) => stan.przerobione[t.temat.id]).length;
  const ostatni = stan.ostatni ? tematyPoId.get(stan.ostatni) : null;
  const pierwszy =
    tematy.find(
      (t) => t.modul.id !== "egzamin" && !stan.przerobione[t.temat.id],
    ) || tematy[0];
  const cel = ostatni || pierwszy;
  const ileBledow = Object.keys(stan.bledy).length;
  const najlepszy = stan.testy.length
    ? Math.max(...stan.testy.map((t) => t.wynik / t.max))
    : null;
  const pierwszyEgz = egzaminMod ? tematyModulu(egzaminMod)[0] : null;
  return (
    '<div class="page page-wide"><section class="hero"><h1 tabindex="-1">Zdaj INF.03 krok po kroku</h1><p>Lekcje z HTML, CSS, JavaScript, PHP i SQL napisane prostym językiem. Do tego przykłady kodu, quizy w stylu egzaminu i próbny test na czas.</p><div class="btn-row">' +
    (cel
      ? '<a class="btn btn-primary" href="#/t/' +
        cel.temat.id +
        '">' +
        (ostatni
          ? "Kontynuuj: " + esc(czysty(cel.temat.tytul))
          : "Zacznij naukę") +
        "</a>"
      : "") +
    '<a class="btn" href="#/test">Próbny test (' +
    TEST_ILE +
    " pytań)</a>" +
    (pierwszyEgz
      ? '<a class="btn btn-ghost" href="#/m/egzamin">O egzaminie</a>'
      : "") +
    "</div></section>" +
    '<div class="stats"><div class="stat"><span class="stat-value">' +
    liczba.format(zrobione) +
    " / " +
    liczba.format(tematy.length) +
    '</span><span class="stat-label">przerobionych tematów</span></div><div class="stat"><span class="stat-value">' +
    liczba.format(pytania.length) +
    '</span><span class="stat-label">pytań w bazie quizów</span></div><div class="stat"><span class="stat-value">' +
    liczba.format(ileBledow) +
    '</span><span class="stat-label">' +
    (ileBledow
      ? '<a href="#/quiz/bledy">pytań do powtórki</a>'
      : "pytań do powtórki") +
    '</span></div><div class="stat"><span class="stat-value">' +
    (najlepszy != null ? procent.format(najlepszy) : "-") +
    '</span><span class="stat-label">najlepszy próbny test</span></div></div>' +
    '<h2 class="section-title">Języki i technologie</h2><div class="cards">' +
    jezyki.map(kartaModulu).join("") +
    "</div>" +
    (egzaminMod
      ? '<h2 class="section-title">Egzamin i inne zagadnienia</h2><div class="cards">' +
        kartaModulu(egzaminMod) +
        "</div>"
      : "") +
    '<h2 class="section-title">Jak wygląda egzamin INF.03</h2><div class="facts">' +
    FAKTY.map(
      (f) =>
        '<div class="fact"><h3>' +
        esc(f.tytul) +
        "</h3><ul>" +
        f.punkty.map((p) => "<li>" + fmt(p) + "</li>").join("") +
        "</ul></div>",
    ).join("") +
    "</div>" +
    '<h2 class="section-title">Jak się uczyć z tej strony</h2><div class="content"><ol><li>Przeczytaj temat i <strong>przepisz przykłady sam</strong> w edytorze. Samo czytanie to za mało.</li><li>Kliknij <strong>Oznacz jako przerobione</strong>, gdy rozumiesz temat.</li><li>Na końcu działu rozwiąż <strong>quiz</strong>. Błędne odpowiedzi trafią do powtórki.</li><li>Raz w tygodniu zrób <strong>próbny test</strong> na czas: 40 pytań, 60 minut.</li><li>Przed egzaminem przećwicz <strong>całe zadanie praktyczne</strong>: baza, zapytania, strona i skrypt.</li></ol></div>' +
    '<div class="btn-row spaced-top"><button class="btn btn-danger" type="button" data-akcja="reset">Wyczyść postęp nauki</button></div>' +
    '<p class="footer-note">Strona do samodzielnej nauki. To nie jest oficjalny materiał CKE. Postęp zapisuje się tylko w tej przeglądarce.</p></div>'
  );
}

function widokModul(id) {
  const m = moduly.find((x) => x.id === id);
  if (!m) return widok404();
  document.title = m.nazwa + " - INF.03";
  const lista = tematyModulu(m);
  const p = postepModulu(m);
  const nastepny = lista.find((t) => !stan.przerobione[t.temat.id]) || lista[0];
  const najlepszy = stan.wyniki[m.id];
  return (
    '<div class="page" ' +
    kolor(m.id) +
    ">" +
    okruchy([["Start", "#/"], [m.nazwa]]) +
    '<h1 class="page-title" tabindex="-1">' +
    esc(m.nazwa) +
    '</h1><p class="lead">' +
    fmt(m.opis) +
    "</p>" +
    '<div class="stats"><div class="stat"><span class="stat-value">' +
    p.zrobione +
    " / " +
    p.wszystkie +
    '</span><span class="stat-label">przerobionych tematów</span></div><div class="stat"><span class="stat-value">' +
    liczba.format((m.quiz || []).length) +
    '</span><span class="stat-label">pytań w quizie</span></div><div class="stat"><span class="stat-value">' +
    (najlepszy != null ? procent.format(najlepszy) : "-") +
    '</span><span class="stat-label">najlepszy wynik quizu</span></div></div>' +
    pasek(p.ulamek, "Postęp: " + m.nazwa) +
    '<div class="btn-row spaced">' +
    (nastepny
      ? '<a class="btn btn-primary" href="#/t/' +
        nastepny.temat.id +
        '">' +
        (p.zrobione ? "Kontynuuj naukę" : "Zacznij od pierwszego tematu") +
        "</a>"
      : "") +
    '<a class="btn" href="#/quiz/' +
    m.id +
    '">Quiz (' +
    ilePytan((m.quiz || []).length) +
    ")</a></div>" +
    m.dzialy
      .map(
        (d, i) =>
          '<section class="sec-block"><h2><span class="sec-num">' +
          String(i + 1).padStart(2, "0") +
          "</span>" +
          fmt(d.tytul) +
          '</h2><ul class="topic-list">' +
          d.tematy
            .map((t) => {
              const z = !!stan.przerobione[t.id];
              return (
                '<li class="topic-item"><a href="#/t/' +
                t.id +
                '"><span class="check' +
                (z ? " done" : "") +
                '" aria-hidden="true"></span><span class="topic-item-body"><span class="topic-item-title">' +
                fmt(t.tytul) +
                '</span><span class="topic-item-desc">' +
                fmt(t.skrot) +
                "</span></span>" +
                (z ? '<span class="sr-only">(przerobione)</span>' : "") +
                "</a></li>"
              );
            })
            .join("") +
          "</ul></section>",
      )
      .join("") +
    "</div>"
  );
}

function widokTemat(id) {
  const w = tematyPoId.get(id);
  if (!w) return widok404();
  stan.ostatni = id;
  zapiszStan();
  document.title = czysty(w.temat.tytul) + " - " + w.modul.nazwa + " - INF.03";
  const lista = tematyModulu(w.modul);
  const i = lista.indexOf(w);
  const poprz = lista[i - 1];
  const nast = lista[i + 1];
  return (
    '<article class="page" ' +
    kolor(w.modul.id) +
    ">" +
    okruchy([
      ["Start", "#/"],
      [w.modul.nazwa, "#/m/" + w.modul.id],
      [czysty(w.dzial.tytul)],
    ]) +
    '<h1 class="page-title" tabindex="-1">' +
    fmt(w.temat.tytul) +
    '</h1><p class="lead">' +
    fmt(w.temat.skrot) +
    "</p>" +
    '<div class="content">' +
    w.temat.tresc.map(blok).join("") +
    "</div>" +
    '<footer class="topic-foot"><div class="done-toggle" id="doneBox">' +
    przyciskPrzerobione(id) +
    "</div>" +
    '<nav class="pager" aria-label="Kolejne tematy">' +
    (poprz
      ? '<a class="prev" href="#/t/' +
        poprz.temat.id +
        '"><small>Poprzedni temat</small><strong>' +
        fmt(poprz.temat.tytul) +
        "</strong></a>"
      : "") +
    (nast
      ? '<a class="next" href="#/t/' +
        nast.temat.id +
        '"><small>Następny temat</small><strong>' +
        fmt(nast.temat.tytul) +
        "</strong></a>"
      : '<a class="next" href="#/quiz/' +
        w.modul.id +
        '"><small>Koniec działu</small><strong>Sprawdź się w quizie</strong></a>') +
    "</nav></footer></article>"
  );
}

function przyciskPrzerobione(id) {
  const z = !!stan.przerobione[id];
  return (
    "<p>" +
    (z
      ? "Ten temat jest oznaczony jako przerobiony."
      : "Rozumiesz ten temat? Oznacz go, żeby śledzić postęp.") +
    '</p><button class="btn ' +
    (z ? "btn-ok" : "btn-primary") +
    '" type="button" data-akcja="przerobione" data-id="' +
    esc(id) +
    '" aria-pressed="' +
    z +
    '">' +
    (z ? "Przerobione" : "Oznacz jako przerobione") +
    "</button>"
  );
}

function pulaQuizu(id) {
  if (id === "bledy") return pytania.filter((p) => stan.bledy[p.klucz]);
  return pytania.filter((p) => p.modul === id);
}

function nazwaQuizu(id) {
  if (id === "bledy") return "Powtórka błędów";
  const m = moduly.find((x) => x.id === id);
  return "Quiz: " + (m ? m.nazwa : id);
}

function widokQuiz(id) {
  if (id !== "bledy" && !moduly.find((m) => m.id === id)) return widok404();
  document.title = nazwaQuizu(id) + " - INF.03";
  const q = quizy[id];
  if (!q) return ekranStartQuizu(id);
  if (q.koniec) return ekranWynikuQuizu(id, q);
  return ekranPytania(id, q);
}

function okruchyQuizu(id) {
  if (id === "bledy") return okruchy([["Start", "#/"], ["Powtórka błędów"]]);
  const m = moduly.find((x) => x.id === id);
  return okruchy([["Start", "#/"], [m.nazwa, "#/m/" + id], ["Quiz"]]);
}

function ekranStartQuizu(id) {
  const pula = pulaQuizu(id);
  const kol = id === "bledy" ? "" : kolor(id);
  if (!pula.length) {
    return (
      '<div class="quiz-shell">' +
      okruchyQuizu(id) +
      '<h1 class="page-title" tabindex="-1">' +
      esc(nazwaQuizu(id)) +
      '</h1><div class="empty"><p>' +
      (id === "bledy"
        ? "Nie masz pytań do powtórki. Rozwiązuj quizy i próbne testy, a błędne odpowiedzi pojawią się tutaj."
        : "Ten dział nie ma jeszcze pytań.") +
      '</p><a class="btn btn-primary" href="#/">Wróć na start</a></div></div>'
    );
  }
  const opcje = [10, 20].filter((n) => n < pula.length).concat([pula.length]);
  const opis =
    id === "bledy"
      ? "Tu trafiają pytania z błędną odpowiedzią. Dobra odpowiedź usuwa pytanie z powtórki."
      : "Pytania w stylu części pisemnej egzaminu. Po każdej odpowiedzi zobaczysz wyjaśnienie.";
  return (
    '<div class="quiz-shell" ' +
    kol +
    ">" +
    okruchyQuizu(id) +
    '<h1 class="page-title" tabindex="-1">' +
    esc(nazwaQuizu(id)) +
    '</h1><p class="lead">' +
    esc(opis) +
    "</p>" +
    '<form class="setup" data-form="quiz" data-id="' +
    esc(id) +
    '"><fieldset><legend>Ile pytań chcesz rozwiązać?</legend><div class="chips">' +
    opcje
      .map(
        (n, i) =>
          '<label class="chip"><input type="radio" name="ile" value="' +
          n +
          '"' +
          (i === 0 ? " checked" : "") +
          "><span>" +
          (n === pula.length ? "Wszystkie (" + n + ")" : n) +
          "</span></label>",
      )
      .join("") +
    '</div></fieldset><div class="btn-row"><button class="btn btn-primary" type="submit">Rozpocznij quiz</button></div></form></div>'
  );
}

function listaOdpowiedzi(p, akcja, odp, pokazWynik) {
  return (
    '<ul class="answers">' +
    p.odpowiedzi
      .map((a, n) => {
        let k = "";
        if (pokazWynik) {
          if (n === p.poprawna) k = " correct";
          else if (n === odp) k = " wrong";
        } else if (n === odp) k = " picked";
        return (
          '<li><button type="button" class="answer' +
          k +
          '" data-akcja="' +
          akcja +
          '" data-n="' +
          n +
          '"' +
          (pokazWynik ? " disabled" : "") +
          (akcja === "test-odp" ? ' aria-pressed="' + (n === odp) + '"' : "") +
          '><span class="answer-letter" aria-hidden="true">' +
          LITERY[n] +
          '</span><span class="answer-text"><span class="sr-only">' +
          LITERY[n] +
          ". </span>" +
          fmt(a) +
          "</span></button></li>"
        );
      })
      .join("") +
    "</ul>"
  );
}

function ekranPytania(id, q) {
  const p = q.pytania[q.i];
  const odp = q.odp[q.i];
  const jest = odp != null;
  const dobre = q.odp.filter((o, i) => o === q.pytania[i].poprawna).length;
  const ok = odp === p.poprawna;
  const kol = id === "bledy" ? kolor(p.modul) : kolor(id);
  return (
    '<div class="quiz-shell" ' +
    kol +
    '><div class="quiz-top"><h1 class="quiz-title">' +
    esc(nazwaQuizu(id)) +
    "</h1><span>Pytanie " +
    (q.i + 1) +
    " z " +
    q.pytania.length +
    " · poprawne: " +
    dobre +
    "</span></div>" +
    pasek((q.i + (jest ? 1 : 0)) / q.pytania.length, "Postęp quizu") +
    '<div class="q-card spaced-top-sm"><h2 class="q-text" tabindex="-1" data-fokus>' +
    fmt(p.pytanie) +
    "</h2>" +
    listaOdpowiedzi(p, "quiz-odp", odp, jest) +
    '<div class="feedback">' +
    (jest
      ? '<div class="fb ' +
        (ok ? "fb-ok" : "fb-bad") +
        '"><strong>' +
        (ok
          ? "Dobrze!"
          : "Źle. Poprawna odpowiedź to " + LITERY[p.poprawna] + ".") +
        "</strong><p>" +
        fmt(p.wyjasnienie) +
        "</p></div>"
      : "") +
    "</div>" +
    '<div class="quiz-nav"><a class="btn btn-ghost" href="' +
    (id === "bledy" ? "#/" : "#/m/" + id) +
    '">Wróć do nauki</a>' +
    (jest
      ? '<button class="btn btn-primary" type="button" data-akcja="quiz-dalej" id="dalejBtn">' +
        (q.i + 1 < q.pytania.length ? "Następne pytanie" : "Zobacz wynik") +
        "</button>"
      : "") +
    '</div><p class="hint">Skróty: <kbd>1</kbd>-<kbd>4</kbd> albo <kbd>A</kbd>-<kbd>D</kbd> wybierają odpowiedź, <kbd>Enter</kbd> przechodzi dalej.</p></div></div>'
  );
}

function komentarz(u) {
  if (u >= 0.9) return "Świetny wynik! Tak trzymaj.";
  if (u >= 0.75) return "Bardzo dobrze. Powtórz tylko błędne pytania.";
  if (u >= 0.5)
    return "Zaliczone, ale warto powtórzyć tematy, w których były błędy.";
  return "Na egzaminie to za mało (próg to 50%). Wróć do tematów i spróbuj jeszcze raz.";
}

function przeglad(lista, odp, tylkoBledne) {
  const elementy = lista
    .map((p, i) => ({ p, i, o: odp[i] }))
    .filter((x) => !tylkoBledne || x.o !== x.p.poprawna)
    .map(({ p, i, o }) => {
      const ok = o === p.poprawna;
      return (
        '<li class="review-item' +
        (ok ? "" : " bad") +
        '"><h3>' +
        (i + 1) +
        ". " +
        fmt(p.pytanie) +
        "</h3><ul>" +
        p.odpowiedzi
          .map(
            (a, n) =>
              '<li class="' +
              (n === p.poprawna ? "r-correct" : n === o ? "r-wrong" : "") +
              '">' +
              LITERY[n] +
              ". " +
              fmt(a) +
              (n === p.poprawna
                ? '<span class="sr-only"> (poprawna)</span>'
                : n === o
                  ? '<span class="sr-only"> (twoja odpowiedź)</span>'
                  : "") +
              "</li>",
          )
          .join("") +
        "</ul>" +
        (o == null ? "<p><strong>Brak odpowiedzi.</strong></p>" : "") +
        "<p>" +
        fmt(p.wyjasnienie) +
        "</p></li>"
      );
    });
  if (!elementy.length)
    return '<div class="empty spaced-top"><p>Brak błędnych odpowiedzi. Gratulacje!</p></div>';
  return '<ol class="review">' + elementy.join("") + "</ol>";
}

function ekranWynikuQuizu(id, q) {
  const dobre = q.odp.filter((o, i) => o === q.pytania[i].poprawna).length;
  const u = dobre / q.pytania.length;
  const kol = id === "bledy" ? "" : kolor(id);
  const zle = q.pytania.length - dobre;
  return (
    '<div class="quiz-shell" ' +
    kol +
    ">" +
    okruchyQuizu(id) +
    '<div class="result"><h1 class="page-title" tabindex="-1">Wynik: ' +
    esc(nazwaQuizu(id)) +
    '</h1><div class="result-score ' +
    (u >= TEST_PROG ? "result-pass" : "result-fail") +
    '">' +
    dobre +
    " / " +
    q.pytania.length +
    "</div><p>" +
    procent.format(u) +
    " poprawnych odpowiedzi. " +
    komentarz(u) +
    "</p>" +
    '<div class="btn-row"><button class="btn btn-primary" type="button" data-akcja="quiz-reset" data-id="' +
    esc(id) +
    '">Rozwiąż jeszcze raz</button>' +
    (id !== "bledy"
      ? '<a class="btn" href="#/m/' + id + '">Wróć do działu</a>'
      : '<a class="btn" href="#/">Wróć na start</a>') +
    (zle && id !== "bledy"
      ? '<a class="btn btn-ghost" href="#/quiz/bledy">Powtórka błędów</a>'
      : "") +
    "</div></div>" +
    (zle
      ? '<h2 class="section-title">Pytania z błędną odpowiedzią</h2>' +
        przeglad(q.pytania, q.odp, true)
      : "") +
    "</div>"
  );
}

function czasTekst(ms) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return (
    String(Math.floor(s / 60)).padStart(2, "0") +
    ":" +
    String(s % 60).padStart(2, "0")
  );
}

function widokTest() {
  document.title = "Próbny test - INF.03";
  if (!test) return ekranStartTestu();
  if (test.koniec) return ekranWynikuTestu();
  return ekranTestu();
}

function ekranStartTestu() {
  const ile = Math.min(TEST_ILE, pytania.length);
  const historia = stan.testy.slice(-5).reverse();
  return (
    '<div class="quiz-shell">' +
    okruchy([["Start", "#/"], ["Próbny test"]]) +
    '<h1 class="page-title" tabindex="-1">Próbny test INF.03</h1><p class="lead">Test wygląda jak część pisemna egzaminu. Pytania są losowane ze wszystkich działów.</p>' +
    '<div class="setup"><div class="content"><ul><li><strong>' +
    ilePytan(ile) +
    "</strong>, każde z 4 odpowiedziami.</li><li>Czas: <strong>" +
    TEST_MINUTY +
    " minut</strong>. Po upływie czasu test kończy się sam.</li><li>Do zaliczenia potrzebujesz <strong>" +
    procent.format(TEST_PROG) +
    "</strong>, czyli " +
    Math.ceil(ile * TEST_PROG) +
    " dobrych odpowiedzi.</li><li>Odpowiedzi możesz zmieniać aż do końca testu. Wynik zobaczysz na końcu.</li></ul></div>" +
    '<div class="btn-row"><button class="btn btn-primary" type="button" data-akcja="test-start">Rozpocznij test</button></div></div>' +
    (historia.length
      ? '<h2 class="section-title">Ostatnie wyniki</h2><div class="table-wrap" tabindex="0" role="region" aria-label="Ostatnie wyniki"><table><thead><tr><th scope="col">Data</th><th scope="col">Wynik</th><th scope="col">Procent</th><th scope="col">Status</th></tr></thead><tbody>' +
        historia
          .map(
            (t) =>
              "<tr><td>" +
              esc(dataFmt.format(new Date(t.data))) +
              "</td><td>" +
              t.wynik +
              " / " +
              t.max +
              "</td><td>" +
              procent.format(t.wynik / t.max) +
              "</td><td>" +
              (t.wynik / t.max >= TEST_PROG ? "zdany" : "niezdany") +
              "</td></tr>",
          )
          .join("") +
        "</tbody></table></div>"
      : "") +
    "</div>"
  );
}

function ekranTestu() {
  const p = test.pytania[test.i];
  const odp = test.odp[test.i];
  const zostalo = test.termin - Date.now();
  const odpowiedziane = test.odp.filter((o) => o != null).length;
  return (
    '<div class="quiz-shell" ' +
    kolor(p.modul) +
    '><div class="quiz-top"><h1 class="quiz-title">Próbny test INF.03</h1><span>Odpowiedziano: ' +
    odpowiedziane +
    " / " +
    test.pytania.length +
    '</span><span class="timer' +
    (zostalo < 300000 ? " low" : "") +
    '" id="timer" role="timer" aria-label="Pozostały czas">' +
    czasTekst(zostalo) +
    "</span></div>" +
    '<div class="q-card"><p class="quiz-num">Pytanie ' +
    (test.i + 1) +
    " z " +
    test.pytania.length +
    '</p><h2 class="q-text" tabindex="-1" data-fokus>' +
    fmt(p.pytanie) +
    "</h2>" +
    listaOdpowiedzi(p, "test-odp", odp, false) +
    '<div class="quiz-nav"><button class="btn" type="button" data-akcja="test-poprz"' +
    (test.i === 0 ? " disabled" : "") +
    ">Poprzednie</button>" +
    (test.i + 1 < test.pytania.length
      ? '<button class="btn btn-primary" type="button" data-akcja="test-nast">Następne</button>'
      : '<button class="btn btn-primary" type="button" data-akcja="test-zakoncz">Zakończ test</button>') +
    '</div><p class="hint">Skróty: <kbd>1</kbd>-<kbd>4</kbd> albo <kbd>A</kbd>-<kbd>D</kbd> wybierają odpowiedź, <kbd>←</kbd> <kbd>→</kbd> zmieniają pytanie.</p></div>' +
    '<div class="q-grid" role="group" aria-label="Przejdź do pytania">' +
    test.pytania
      .map(
        (x, k) =>
          '<button type="button" data-akcja="test-idz" data-n="' +
          k +
          '" class="' +
          (test.odp[k] != null ? "answered" : "") +
          '"' +
          (k === test.i ? ' aria-current="true"' : "") +
          ' aria-label="Pytanie ' +
          (k + 1) +
          (test.odp[k] != null ? ", odpowiedziano" : ", bez odpowiedzi") +
          '">' +
          (k + 1) +
          "</button>",
      )
      .join("") +
    '</div><div class="btn-row spaced-top end"><button class="btn btn-danger" type="button" data-akcja="test-zakoncz">Zakończ test</button></div></div>'
  );
}

function ekranWynikuTestu() {
  const w = test.wynik;
  const u = w.dobre / w.max;
  const zdany = u >= TEST_PROG;
  return (
    '<div class="quiz-shell">' +
    okruchy([["Start", "#/"], ["Wynik próbnego testu"]]) +
    '<div class="result"><h1 class="page-title" tabindex="-1">' +
    (zdany ? "Test zdany" : "Test niezdany") +
    '</h1><div class="result-score ' +
    (zdany ? "result-pass" : "result-fail") +
    '">' +
    w.dobre +
    " / " +
    w.max +
    "</div><p>" +
    procent.format(u) +
    " poprawnych odpowiedzi (próg: " +
    procent.format(TEST_PROG) +
    "). Czas: " +
    czasTekst(w.czas) +
    ". " +
    komentarz(u) +
    "</p>" +
    '<div class="btn-row"><button class="btn btn-primary" type="button" data-akcja="test-nowy">Nowy test</button>' +
    (w.dobre < w.max
      ? '<a class="btn" href="#/quiz/bledy">Powtórka błędów</a>'
      : "") +
    '<a class="btn btn-ghost" href="#/">Wróć na start</a></div></div>' +
    '<h2 class="section-title">Przegląd odpowiedzi</h2><div class="filters" role="group" aria-label="Filtr pytań"><button class="btn' +
    (test.filtr === "bledne" ? " btn-primary" : "") +
    '" type="button" data-akcja="test-filtr" data-f="bledne" aria-pressed="' +
    (test.filtr === "bledne") +
    '">Tylko błędne (' +
    (w.max - w.dobre) +
    ')</button><button class="btn' +
    (test.filtr === "wszystkie" ? " btn-primary" : "") +
    '" type="button" data-akcja="test-filtr" data-f="wszystkie" aria-pressed="' +
    (test.filtr === "wszystkie") +
    '">Wszystkie (' +
    w.max +
    ")</button></div>" +
    przeglad(test.pytania, test.odp, test.filtr === "bledne") +
    "</div>"
  );
}

function widokSzukaj(q) {
  document.title = (q ? "Szukaj: " + q : "Szukaj") + " - INF.03";
  const { slowa, wyniki } = szukaj(q);
  let tresc;
  if (!slowa.length)
    tresc =
      '<div class="empty"><p>Wpisz słowo w polu wyszukiwania u góry, np. <code>JOIN</code>, <code>float</code> albo <code>formularz</code>.</p></div>';
  else if (!wyniki.length)
    tresc =
      '<div class="empty"><p>Nic nie znaleziono dla „' +
      esc(q) +
      "”. Sprawdź pisownię albo wpisz krótsze słowo.</p></div>";
  else
    tresc =
      '<ul class="search-results">' +
      wyniki
        .map(
          ({ x }) =>
            '<li><a href="#/t/' +
            x.w.temat.id +
            '" ' +
            kolor(x.w.modul.id) +
            '><span class="sr-head"><span class="tag">' +
            esc(x.w.modul.nazwa) +
            '</span><span class="sr-title">' +
            podswietl(x.tytul, slowa) +
            '</span></span><span class="sr-snippet">' +
            fragment(x, slowa) +
            "</span></a></li>",
        )
        .join("") +
      "</ul>";
  return (
    '<div class="page">' +
    okruchy([["Start", "#/"], ["Wyszukiwanie"]]) +
    '<h1 class="page-title" tabindex="-1">Wyszukiwanie</h1>' +
    (slowa.length
      ? '<p class="lead">' +
        (wyniki.length
          ? "Znaleziono " + ileTematow(wyniki.length) + " dla „" + esc(q) + "”."
          : "Brak wyników.") +
        "</p>"
      : "") +
    tresc +
    "</div>"
  );
}

function widok404() {
  document.title = "Nie znaleziono - INF.03";
  return '<div class="page"><h1 class="page-title" tabindex="-1">Nie ma takiej strony</h1><div class="empty"><p>Ten adres nie prowadzi do żadnego tematu. Możliwe, że link jest stary.</p><a class="btn btn-primary" href="#/">Wróć na start</a></div></div>';
}

function zbudujMenu() {
  const modulMenu = (m) =>
    '<details class="nav-mod" data-mod="' +
    m.id +
    '" ' +
    kolor(m.id) +
    '><summary><span class="dot" aria-hidden="true"></span><span class="nav-mod-name">' +
    esc(m.nazwa) +
    '</span><span class="nav-count" data-licznik="' +
    m.id +
    '"></span></summary>' +
    '<a class="nav-quiz" href="#/m/' +
    m.id +
    '">Przegląd działu</a>' +
    m.dzialy
      .map(
        (d) =>
          '<div class="nav-sec"><p class="nav-sec-title">' +
          esc(czysty(d.tytul)) +
          "</p><ul>" +
          d.tematy
            .map(
              (t) =>
                '<li><a class="nav-link" href="#/t/' +
                t.id +
                '" data-temat="' +
                t.id +
                '"><span class="check" aria-hidden="true"></span><span class="nav-link-text">' +
                esc(czysty(t.tytul)) +
                '</span><span class="sr-only stan-tematu"></span></a></li>',
            )
            .join("") +
          "</ul></div>",
      )
      .join("") +
    '<a class="nav-quiz" href="#/quiz/' +
    m.id +
    '">Quiz: ' +
    esc(m.nazwa) +
    " (" +
    (m.quiz || []).length +
    ")</a></details>";
  sidebarNav.innerHTML =
    '<a class="nav-home" href="#/">Strona główna</a><a class="nav-home" href="#/test">Próbny test</a><a class="nav-home" href="#/quiz/bledy">Powtórka błędów <span class="nav-count" id="navBledy"></span></a>' +
    '<p class="nav-group-label">Języki</p>' +
    jezyki.map(modulMenu).join("") +
    (egzaminMod
      ? '<p class="nav-group-label">Egzamin</p>' + modulMenu(egzaminMod)
      : "");
}

function aktualizujMenu() {
  const { czesci } = trasa();
  const biezacy = "#/" + czesci.map(encodeURIComponent).join("/");
  let aktywny = null;
  sidebarNav.querySelectorAll("a").forEach((a) => {
    if (a.getAttribute("href") === biezacy) {
      a.setAttribute("aria-current", "page");
      aktywny = a;
    } else a.removeAttribute("aria-current");
  });
  sidebarNav.querySelectorAll("[data-temat]").forEach((a) => {
    const z = !!stan.przerobione[a.dataset.temat];
    a.querySelector(".check").classList.toggle("done", z);
    a.querySelector(".stan-tematu").textContent = z ? "(przerobione)" : "";
  });
  moduly.forEach((m) => {
    const p = postepModulu(m);
    const el = sidebarNav.querySelector('[data-licznik="' + m.id + '"]');
    if (el) el.textContent = p.zrobione + "/" + p.wszystkie;
  });
  const ile = Object.keys(stan.bledy).length;
  document.getElementById("navBledy").textContent = ile ? "(" + ile + ")" : "";
  let modulId = null;
  if (czesci[0] === "m" || czesci[0] === "quiz") modulId = czesci[1];
  if (czesci[0] === "t" && tematyPoId.get(czesci[1]))
    modulId = tematyPoId.get(czesci[1]).modul.id;
  if (modulId) {
    const det = sidebarNav.querySelector('[data-mod="' + modulId + '"]');
    if (det) det.open = true;
  }
  if (aktywny && aktywny.closest(".nav-mod")) {
    const gora = aktywny.offsetTop;
    if (
      gora < sidebar.scrollTop ||
      gora > sidebar.scrollTop + sidebar.clientHeight - 60
    )
      sidebar.scrollTop = gora - sidebar.clientHeight / 3;
  }
}

function otworzMenu() {
  sidebar.classList.add("open");
  scrim.hidden = false;
  requestAnimationFrame(() => scrim.classList.add("show"));
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtn.setAttribute("aria-label", "Zamknij menu");
  document.body.classList.add("no-scroll");
  const cel =
    sidebarNav.querySelector('[aria-current="page"]') ||
    sidebarNav.querySelector("a");
  if (cel) cel.focus({ preventScroll: false });
}

function zamknijMenu(wrocFokus) {
  if (!sidebar.classList.contains("open")) return;
  sidebar.classList.remove("open");
  scrim.classList.remove("show");
  scrim.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Otwórz menu");
  document.body.classList.remove("no-scroll");
  if (wrocFokus) menuBtn.focus();
}

function trasa() {
  const h = location.hash.replace(/^#\/?/, "");
  const [sciezka, zapytanie] = h.split("?");
  const czesci = sciezka
    .split("/")
    .filter(Boolean)
    .map((c) => {
      try {
        return decodeURIComponent(c);
      } catch (e) {
        return c;
      }
    });
  return { czesci, params: new URLSearchParams(zapytanie || "") };
}

function zatrzymajTimer() {
  if (timer) clearInterval(timer);
  timer = null;
}

function uruchomTimer() {
  zatrzymajTimer();
  timer = setInterval(() => {
    if (!test || test.koniec) return zatrzymajTimer();
    const zostalo = test.termin - Date.now();
    const el = document.getElementById("timer");
    if (el) {
      el.textContent = czasTekst(zostalo);
      el.classList.toggle("low", zostalo < 300000);
    }
    if (zostalo <= 0) {
      zakonczTest();
      oglos("Czas minął. Test został zakończony.");
    }
  }, 1000);
}

function dopasujPodglad(f) {
  try {
    const d = f.contentDocument;
    if (d && d.documentElement)
      f.style.height =
        Math.max(
          60,
          Math.ceil(d.documentElement.getBoundingClientRect().height),
        ) + "px";
  } catch (e) {
    f.style.height = "240px";
  }
}

function renderuj(opcje) {
  const o = opcje || {};
  zatrzymajTimer();
  const { czesci, params } = trasa();
  const [a, b] = czesci;
  let html;
  if (!a) html = widokStart();
  else if (a === "m") html = widokModul(b);
  else if (a === "t") html = widokTemat(b);
  else if (a === "quiz") html = widokQuiz(b);
  else if (a === "test") html = widokTest();
  else if (a === "szukaj") html = widokSzukaj(params.get("q") || "");
  else html = widok404();
  app.innerHTML = html;
  app
    .querySelectorAll("iframe[data-podglad]")
    .forEach((f) => f.addEventListener("load", () => dopasujPodglad(f)));
  if (a === "test" && test && !test.koniec) uruchomTimer();
  if (a === "szukaj") {
    if (document.activeElement !== searchInput)
      searchInput.value = params.get("q") || "";
  } else if (document.activeElement !== searchInput) searchInput.value = "";
  aktualizujMenu();
  zamknijMenu(false);
  if (!o.zachowajPozycje) window.scrollTo(0, 0);
  if (!pierwszyRender && !o.bezFokusu && !pomijajFokus) {
    const f = app.querySelector("[data-fokus]") || app.querySelector("h1");
    if (f) f.focus({ preventScroll: true });
  }
  pomijajFokus = false;
  pierwszyRender = false;
}

function odswiez(selektor) {
  renderuj({ zachowajPozycje: true, bezFokusu: !!selektor });
  if (selektor) {
    const el = app.querySelector(selektor);
    if (el) el.focus({ preventScroll: false });
  }
}

function powiadom(t) {
  toast.textContent = t;
  toast.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => toast.classList.remove("show"), 2400);
}

function oglos(t) {
  ogloszenia.textContent = "";
  setTimeout(() => {
    ogloszenia.textContent = t;
  }, 50);
}

function potwierdz(tytul, tekst, ok) {
  if (typeof dialog.showModal !== "function")
    return Promise.resolve(window.confirm(tytul + "\n\n" + tekst));
  return new Promise((res) => {
    document.getElementById("dialogTitle").textContent = tytul;
    document.getElementById("dialogText").textContent = tekst;
    document.getElementById("dialogOk").textContent = ok;
    dialog.returnValue = "";
    dialog.addEventListener("close", () => res(dialog.returnValue === "ok"), {
      once: true,
    });
    dialog.showModal();
  });
}

async function kopiuj(btn) {
  const tekst = btn.closest(".code").querySelector("code").textContent;
  let ok = false;
  try {
    await navigator.clipboard.writeText(tekst);
    ok = true;
  } catch (e) {
    const t = document.createElement("textarea");
    t.value = tekst;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    try {
      ok = document.execCommand("copy");
    } catch (e2) {
      ok = false;
    }
    t.remove();
  }
  btn.textContent = ok ? "Skopiowano" : "Błąd";
  btn.classList.toggle("copied", ok);
  setTimeout(() => {
    btn.textContent = "Kopiuj";
    btn.classList.remove("copied");
  }, 1600);
  powiadom(
    ok
      ? "Kod skopiowany do schowka."
      : "Nie udało się skopiować. Zaznacz kod i naciśnij Ctrl+C.",
  );
}

function przelaczPrzerobione(id) {
  if (stan.przerobione[id]) delete stan.przerobione[id];
  else stan.przerobione[id] = 1;
  zapiszStan();
  const box = document.getElementById("doneBox");
  if (box) {
    box.innerHTML = przyciskPrzerobione(id);
    box.querySelector("button").focus();
  }
  aktualizujMenu();
  powiadom(
    stan.przerobione[id]
      ? "Temat oznaczony jako przerobiony."
      : "Usunięto oznaczenie tematu.",
  );
}

function odpowiedzQuiz(id, n) {
  const q = quizy[id];
  if (!q || q.koniec || q.odp[q.i] != null) return;
  const p = q.pytania[q.i];
  q.odp[q.i] = n;
  if (n === p.poprawna) delete stan.bledy[p.klucz];
  else stan.bledy[p.klucz] = 1;
  zapiszStan();
  odswiez("#dalejBtn");
  oglos(
    n === p.poprawna
      ? "Dobrze!"
      : "Źle. Poprawna odpowiedź to " + LITERY[p.poprawna] + ".",
  );
}

function dalejQuiz(id) {
  const q = quizy[id];
  if (!q || q.odp[q.i] == null) return;
  if (q.i + 1 < q.pytania.length) q.i++;
  else {
    q.koniec = true;
    if (id !== "bledy") {
      const u =
        q.odp.filter((o, i) => o === q.pytania[i].poprawna).length /
        q.pytania.length;
      stan.wyniki[id] = Math.max(stan.wyniki[id] || 0, u);
      zapiszStan();
    }
  }
  renderuj({ zachowajPozycje: !q.koniec });
  if (!q.koniec) {
    const f = app.querySelector("[data-fokus]");
    if (f) f.focus({ preventScroll: true });
  }
}

function startTestu() {
  const ile = Math.min(TEST_ILE, pytania.length);
  test = {
    pytania: tasuj(pytania).slice(0, ile),
    odp: Array(ile).fill(null),
    i: 0,
    start: Date.now(),
    termin: Date.now() + TEST_MINUTY * 60000,
    koniec: false,
    filtr: "bledne",
    wynik: null,
  };
  renderuj();
}

function idzDoPytania(n) {
  if (!test || test.koniec) return;
  test.i = Math.max(0, Math.min(test.pytania.length - 1, n));
  renderuj({ zachowajPozycje: true });
}

function odpowiedzTest(n) {
  if (!test || test.koniec) return;
  test.odp[test.i] = test.odp[test.i] === n ? null : n;
  odswiez('[data-akcja="test-odp"][data-n="' + n + '"]');
}

function zakonczTest() {
  if (!test || test.koniec) return;
  zatrzymajTimer();
  const dobre = test.odp.filter(
    (o, i) => o === test.pytania[i].poprawna,
  ).length;
  test.pytania.forEach((p, i) => {
    if (test.odp[i] === p.poprawna) delete stan.bledy[p.klucz];
    else stan.bledy[p.klucz] = 1;
  });
  test.koniec = true;
  test.wynik = {
    dobre,
    max: test.pytania.length,
    czas: Math.min(Date.now(), test.termin) - test.start,
  };
  stan.testy.push({ data: Date.now(), wynik: dobre, max: test.pytania.length });
  stan.testy = stan.testy.slice(-20);
  zapiszStan();
  if (trasa().czesci[0] === "test") renderuj();
}

async function probaZakonczenia() {
  const brak = test.odp.filter((o) => o == null).length;
  const tekst = brak
    ? "Masz " +
      ilePytan(brak) +
      " bez odpowiedzi. Po zakończeniu nie da się już zmienić odpowiedzi."
    : "Po zakończeniu nie da się już zmienić odpowiedzi.";
  if (await potwierdz("Zakończyć test?", tekst, "Zakończ test")) zakonczTest();
}

async function resetPostepu() {
  const ok = await potwierdz(
    "Wyczyścić postęp?",
    "Usuniesz zaznaczone tematy, wyniki quizów, historię testów i listę błędów. Tego nie da się cofnąć.",
    "Wyczyść postęp",
  );
  if (!ok) return;
  stan.przerobione = {};
  stan.bledy = {};
  stan.wyniki = {};
  stan.testy = [];
  stan.ostatni = null;
  zapiszStan();
  Object.keys(quizy).forEach((k) => delete quizy[k]);
  test = null;
  renderuj({ zachowajPozycje: true });
  powiadom("Postęp został wyczyszczony.");
}

app.addEventListener("click", (e) => {
  const el = e.target.closest("[data-akcja]");
  if (!el || el.disabled) return;
  const { czesci } = trasa();
  const n = Number(el.dataset.n);
  switch (el.dataset.akcja) {
    case "kopiuj":
      kopiuj(el);
      break;
    case "przerobione":
      przelaczPrzerobione(el.dataset.id);
      break;
    case "quiz-odp":
      odpowiedzQuiz(czesci[1], n);
      break;
    case "quiz-dalej":
      dalejQuiz(czesci[1]);
      break;
    case "quiz-reset":
      delete quizy[el.dataset.id];
      renderuj();
      break;
    case "test-start":
      startTestu();
      break;
    case "test-odp":
      odpowiedzTest(n);
      break;
    case "test-idz":
      idzDoPytania(n);
      break;
    case "test-poprz":
      idzDoPytania(test.i - 1);
      break;
    case "test-nast":
      idzDoPytania(test.i + 1);
      break;
    case "test-zakoncz":
      probaZakonczenia();
      break;
    case "test-nowy":
      test = null;
      renderuj();
      break;
    case "test-filtr":
      test.filtr = el.dataset.f;
      odswiez('[data-akcja="test-filtr"][data-f="' + el.dataset.f + '"]');
      break;
    case "reset":
      resetPostepu();
      break;
  }
});

app.addEventListener("submit", (e) => {
  const f = e.target;
  if (f.dataset.form !== "quiz") return;
  e.preventDefault();
  const id = f.dataset.id;
  const ile = Number(new FormData(f).get("ile")) || 10;
  const pula = tasuj(pulaQuizu(id)).slice(0, ile);
  quizy[id] = {
    pytania: pula,
    odp: Array(pula.length).fill(null),
    i: 0,
    koniec: false,
  };
  renderuj();
});

searchInput.addEventListener("input", () => {
  const v = searchInput.value.trim();
  const cel = "#/szukaj?q=" + encodeURIComponent(v);
  if (trasa().czesci[0] === "szukaj") {
    history.replaceState(null, "", cel);
    renderuj({ bezFokusu: true });
  } else if (v) {
    pomijajFokus = true;
    location.hash = cel;
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.blur();
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = searchInput.value.trim();
  if (!v) return;
  const { wyniki } = szukaj(v);
  if (wyniki.length) {
    searchInput.blur();
    location.hash = "#/t/" + wyniki[0].x.w.temat.id;
  } else {
    pomijajFokus = true;
    location.hash = "#/szukaj?q=" + encodeURIComponent(v);
  }
});

menuBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) zamknijMenu(true);
  else otworzMenu();
});

scrim.addEventListener("click", () => zamknijMenu(true));

document.addEventListener("keydown", (e) => {
  if (dialog.open) return;
  if (e.key === "Escape" && sidebar.classList.contains("open")) {
    zamknijMenu(true);
    return;
  }
  const t = e.target;
  if (t.closest && t.closest("input, textarea, select, [contenteditable]"))
    return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === "/") {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
    return;
  }
  const { czesci } = trasa();
  const klawisz = e.key.toLowerCase();
  let n = "1234".indexOf(klawisz);
  if (n < 0) n = "abcd".indexOf(klawisz);
  if (czesci[0] === "quiz" && quizy[czesci[1]] && !quizy[czesci[1]].koniec) {
    const q = quizy[czesci[1]];
    if (n >= 0 && klawisz.length === 1 && q.odp[q.i] == null) {
      e.preventDefault();
      odpowiedzQuiz(czesci[1], n);
    } else if (
      e.key === "Enter" &&
      q.odp[q.i] != null &&
      !t.closest("button, a")
    ) {
      e.preventDefault();
      dalejQuiz(czesci[1]);
    }
  } else if (czesci[0] === "test" && test && !test.koniec) {
    if (n >= 0 && klawisz.length === 1) {
      e.preventDefault();
      odpowiedzTest(n);
    } else if (e.key === "ArrowRight" && !t.closest("pre, .table-wrap")) {
      e.preventDefault();
      idzDoPytania(test.i + 1);
    } else if (e.key === "ArrowLeft" && !t.closest("pre, .table-wrap")) {
      e.preventDefault();
      idzDoPytania(test.i - 1);
    }
  }
});

window.addEventListener("hashchange", () => renderuj());

window.addEventListener("beforeunload", (e) => {
  if (test && !test.koniec) {
    e.preventDefault();
    e.returnValue = "";
  }
});

let resizeRaf = 0;
window.addEventListener("resize", () => {
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(() => {
    app.querySelectorAll("iframe[data-podglad]").forEach(dopasujPodglad);
    if (window.innerWidth > 900) zamknijMenu(false);
  });
});

window.addEventListener("storage", (e) => {
  if (e.key !== KLUCZ) return;
  Object.assign(stan, wczytajStan());
  aktualizujMenu();
});

zbudujMenu();
renderuj();
