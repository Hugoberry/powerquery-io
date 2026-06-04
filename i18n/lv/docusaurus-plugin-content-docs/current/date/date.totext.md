---
title: Date.ToText
---

# Date.ToText


Atgriež datuma vērtības teksta attēlojumu.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Atgriež `date` teksta atveidojumu. Neobligāts `record` parametrs, `options`, var tikt nodrošināts, lai precizētu papildu rekvizītus. `culture` tiek izmantots tikai mantotajām darbplūsmām. `record` var saturēt tālāk norādītos laukus:

-   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Papildinformācijai dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai `null` vērtības norādīšanas rezultātā tiks izmantots noklusējuma datuma noformējums, ko nosaka `Culture`.
-   `Culture`: kad `Format` vērtība nav null, `Culture` kontrolē atsevišķus formāta apzīmētājus. Piemēram, izmantojot `"en-US"`, `"MMM"` ir `"Jan", "Feb", "Mar", ...`, bet, izmantojot `"ru-RU"`, `"MMM"` ir `"янв", "фев", "мар", ...`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Kad `Culture` ir `null` vai izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` un `culture` var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertēt `#date(2010, 12, 31)` par `text` vērtību. *Rezultāts var atšķirties atkarībā no pašreizējās kultūras.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Atrodiet gadu Hidžras kalendārā, kas atbilst 2000. gada 1. janvārim pēc Gregora kalendāra.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
