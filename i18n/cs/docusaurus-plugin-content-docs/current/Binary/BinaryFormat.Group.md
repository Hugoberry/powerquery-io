---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Vrátí binární formát, který čte skupinu položek.


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

Parametry jsou následující:<ul><li>Parametr <code>binaryFormat</code> určuje binární formát hodnoty klíče.</li><li>Parametr <code>group</code> poskytuje informace o skupině známých položek.</li><li>Volitelný parametr <code>extra</code> se může použít, pokud chcete zadat funkci, která vrátí hodnotu v binárním formátu u hodnot, které následují po neočekávaném klíči. Když parametr <code>extra</code> není zadaný a zjistí se neočekávané hodnoty klíče, zobrazí se chybová zpráva.</li></ul>Parametr <code>group</code> určuje seznam definic položky. Každou položku definuje seznam obsahující 3 až 5 následujících hodnot:<ul><li>Hodnota klíče. Hodnota klíče, která odpovídá položce. Ta musí být v rámci sady položek jedinečná.</li><li>Formát položky. Binární formát, který odpovídá hodnotě položky. To umožní každé položce, aby měla jiný formát. </li><li>Výskyt položky. Hodnota <code>BinaryOccurrence.Type</code> uvádí, kolikrát se má položka ve skupině objevit. Pokud chybí požadované položky, dojde k chybě. Požadované nebo volitelné duplicitní položky se zpracují jako neočekávané hodnoty klíče.</li><li>Hodnota výchozí položky (volitelné). Pokud se v seznamu definic položky objeví hodnota výchozí položky a není null, použije se místo výchozího nastavení. Výchozí nastavení pro opakované nebo volitelné položky je null a výchozí nastavení pro opakované hodnoty je prázdný seznam \{ }.</li><li>Transformace hodnoty položky (volitelné). Pokud se v seznamu definic položky objeví funkce transformace hodnoty položky a není null, vyvolá se, aby změnila hodnotu položky předtím, než se vrátí. Funkce transformace se vyvolá, jenom pokud se položka objeví ve vstupu (nikdy ji nevyvolá výchozí hodnota). </li></ul>


## Examples

### Example #1 
Následující situace předpokládá hodnotu klíče ve formě jednoho bajtu se čtyřmi očekávanými položkami ve skupině. U každé z nich po klíči následuje bajt dat. Položky se ve vstupu zobrazí takto:&lt;ul&gt;&lt;li&gt;Klíč 1 je požadovaný a zobrazí se s hodnotou 11.&lt;/li&gt;&lt;li&gt;Klíč 2 se opakuje a zobrazí se dvakrát s hodnotou 22. Výsledkem je hodnota \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;Klíč 3 je volitelný a nezobrazí se. Výsledkem je hodnota null.&lt;/li&gt;&lt;li&gt;Klíč 4 se opakuje, ale nezobrazí se. Výsledkem je hodnota \{ }.&lt;/li&gt;&lt;li&gt;Klíč 5 není součástí skupiny, ale zobrazí se jednou s hodnotou 55. Hodnota klíče 5 vyvolá další funkci a vrátí formát, který odpovídá dané hodnotě (BinaryFormat.Byte). Čte se hodnota 55 a pak se zahodí.&lt;/li&gt;&lt;/ul&gt;
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
Následující příklad ukazuje změnu hodnoty položky a výchozí hodnotu položky. Opakovaná položka s klíčem 1 sečte seznam čtených hodnot za použití funkce List.Sum. Volitelná položka s klíčem 2 má výchozí hodnotu 123 místo null.
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
