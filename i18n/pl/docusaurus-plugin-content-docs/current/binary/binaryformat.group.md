---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Zwraca format binarny odczytujący grupę elementów.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Używane są następujące parametry:<ul><li>Parametr <code>binaryFormat</code> określa format binarny wartości klucza.</li><li>Parametr <code>group</code> udostępnia informacje dotyczące grupy znanych elementów.</li><li>Za pomocą opcjonalnego parametru <code>extra</code> można określić funkcję, która będzie zwracać wartość formatu binarnego dla wartości występujących po nieoczekiwanych kluczach. Jeśli parametr <code>extra</code> nie zostanie określony, w sytuacji wystąpienia nieoczekiwanych wartości klucza zostanie zgłoszony błąd.</li></ul>Parametr <code>group</code> określa listę definicji elementów. Każda definicja elementu to lista zawierająca od 3 do 5 wartości, tak jak pokazano poniżej:<ul><li>Wartość klucza. Wartość klucza odpowiadającego elementowi. Musi ona być unikatowa w obrębie zestawu elementów.</li><li>Format elementu. Format binarny odpowiadający wartości elementu. Dzięki tej wartości każdy element może mieć inny format. </li><li>Wystąpienie elementu. Wartość <code>BinaryOccurrence.Type</code> określa, ile razy element powinien wystąpić w grupie. Wymagane elementy, których nie ma, powodują błąd. Wymagane lub opcjonalne zduplikowane elementy są obsługiwane tak jak nieoczekiwane wartości klucza.</li><li>Domyślna wartość elementu (opcjonalna). Jeśli domyślna wartość elementu jest widoczna na liście definicji elementów i jest inna niż null, będzie używana zamiast ustawienia domyślnego. Ustawienie domyślne dla powtarzających się lub opcjonalnych elementów to wartość null, a ustawienie domyślne dla powtarzających się wartości to pusta lista \{ }.</li><li>Przekształcenie wartości elementu (opcjonalne). Jeśli funkcja przekształcenia wartości elementu jest określona na liście definicji elementów i ma wartość inną niż null, zostanie wywołana w celu przekształcenia wartości elementu przed jej zwróceniem. Funkcję przekształcenia można wywołać tylko wtedy, gdy element znajduje się w danych wejściowych (nigdy nie jest wywoływana z użyciem wartości domyślnej). </li></ul>


## Examples

### Example #1 
Poniżej przyjęto założenie, że wartość klucza to pojedynczy bajt, a w grupie oczekiwane są 4 elementy, z których każdy zawiera bajt danych występujący po kluczu.  Element jest widoczny w danych wejściowych w następujący sposób:&lt;ul&gt;&lt;li&gt;Klucz 1 jest wymagany i występuje z wartością 11.&lt;/li&gt;&lt;li&gt;Klucz 2 powtarza się i występuje dwa razy z wartością 22, a więc w wyniku powstaje wartość \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Klucz 3 jest opcjonalny i nie występuje, a więc w wyniku powstaje wartość null.&lt;/li&gt;&lt;li&gt;Klucz 4 powtarza się, ale nie występuje, a więc w wyniku powstaje wartość \{ }.&lt;/li&gt;&lt;li&gt;Klucz 5 nie jest częścią grupy, ale występuje raz z wartością 55.  Dodatkowa funkcja (extra) jest wywoływana z użyciem wartości klucza 5 i zwraca format odpowiadający tej wartości (BinaryFormat.Byte).  Wartość 55 jest odczytywana i odrzucana.&lt;/li&gt;&lt;/ul&gt;
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
W poniższym przykładzie pokazano przekształcenie wartości elementu oraz domyślną wartość elementu.   Powtarzający się element z kluczem 1 sumuje listę odczytanych wartości za pomocą funkcji List.Sum.  Opcjonalny element z kluczem 2 ma wartość domyślną równą 123, a nie wartość null.
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
