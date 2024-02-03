---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Returnează un format binar care citeşte un grup de elemente.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

Parametrii sunt următorii:<ul><li>Parametrul <code>binaryFormat</code> specifică formatul binar al valorii cheii.</li><li>Parametrul <code>group</code> furnizează informații despre grupul de elemente cunoscute.</li><li>Parametrul <code>extra</code> opțional poate fi utilizat pentru a specifica o funcție ce va returna o valoare în format binar a valorii care urmează orice cheie ce nu era așteptată. Dacă nu se specifică parametrul <code>extra</code>, atunci va apărea o eroare dacă există valori neașteptate pentru chei.</li></ul>Parametrul <code>group</code> specifică o listă de definiții ale elementelor. Fiecare definiție de element este o listă ce conține între 3 și 5 valori, după cum urmează:<ul><li>Valoarea cheii. Valoarea cheii care corespunde elementului. Aceasta trebuie să fie unică în cadrul setului de elemente.</li><li>Formatul elementului. Formatul binar care corespunde valorii elementului. Acesta permite ca fiecare element să aibă un format diferit. </li><li>Ocurență element. Valoarea <code>BinaryOccurrence.Type</code> indică de câte ori se așteaptă ca elementul să apară într-un grup. Elementele obligatorii care nu sunt prezente cauzează o eroare. Elementele dublate obligatorii sau opționale sunt tratate ca valori de chei neașteptate.</li><li>Valoare implicită element (opțional). Dacă valoarea implicită a elementului apare în lista de definiții ale elementului și nu este nulă, atunci aceasta va fi utilizată în loc de valoarea implicită. Valoarea implicită pentru elementele repetate sau opționale este nulă și valoarea implicită pentru valorile repetate este o listă necompletată \{ }.</li><li>Transformare valoare element (opțional). Dacă funcția de transformare a valorii elementului apare în lista de definiții ale elementului și nu este nulă, atunci aceasta va fi apelată pentru a transforma valoarea elementului înainte ca acesta să fie returnat. Funcția de transformare este apelată numai dacă elementul apare în datele de intrare (nu va fi apelată niciodată cu valoarea implicită). </li></ul>


## Examples

### Example #1 
Următorul element presupune o valoare pentru chei care este un singur octet, cu 4 elemente aşteptate în grup, toate care au un octet de date ce urmează cheii.  Elementul apare în datele introduse după cum urmează:&lt;ul&gt;&lt;li&gt;Cheia 1 este obligatorie şi apare cu valoarea 11.&lt;/li&gt;&lt;li&gt;Cheia 2 se repetă şi apare de două ori cu valoarea 22 şi duce la o valoare de \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Cheia 3 este opţională şi nu apare, rezultând la o valoare null.&lt;/li&gt;&lt;li&gt;Cheia 4 se repetă, dar nu apare şi duce la o valoare de \{ }.&lt;/li&gt;&lt;li&gt;Cheia 5 nu face parte din grup, dar apare o dată cu valoarea 55.  Funcţia suplimentară este apelată cu valoarea cheii 5 şi returnează formatul care corespunde valorii respective (BinaryFormat.Byte).  Valoarea 55 este citită şi eliminată.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
Exemplul următor ilustrează transformarea valorii elementului şi valoarea implicită a elementului.   Elementul de repetare cu cheia 1 însumează lista de valori citite utilizând List.Sum.  Elementul opţional cu cheia 2 are o valoare implicită de 123 în loc de null.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
