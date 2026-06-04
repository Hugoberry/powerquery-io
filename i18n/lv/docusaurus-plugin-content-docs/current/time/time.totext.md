---
title: Time.ToText
---

# Time.ToText


Atgriež laiks vērtības teksta attēlojumu.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Atgriež `time` teksta atveidojumu. Neobligāts `record` parametrs, `options`, var tikt nodrošināts, lai precizētu papildu rekvizītus. `culture` tiek izmantots tikai mantotajām darbplūsmām. `record` var saturēt tālāk norādītos laukus:

-   `Format`: `text` vērtība, kas norāda izmantojamo formātu. Papildinformācijai dodieties uz https://go.microsoft.com/fwlink/?linkid=2180104 un https://go.microsoft.com/fwlink/?linkid=2180105. Šī lauka izlaišanas vai `null` vērtības norādīšanas rezultātā tiks izmantots noklusējuma datuma noformējums, ko nosaka `Culture`.
-   `Culture`: kad `Format` vērtība nav null, `Culture` kontrolē atsevišķus formāta apzīmētājus. Piemēram, `"en-US"` `"tt"` ir `"AM" vai "PM"`, bet `"ar-EG"` `"tt"` ir `"ص" vai "م"`. Ja `Format` vērtība ir `null`, `Culture` kontrolē izmantojamo noklusējuma formātu. Kad `Culture` ir `null` vai izlaists, tiek izmantots `Culture.Current`.

Lai atbalstītu mantotās darbplūsmas, `options` un `culture` var būt arī teksta vērtības. Tam ir tāda pati uzvedība kā tad, ja `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertēt `#time(01, 30, 25)` par `text` vērtību. *Rezultāts var atšķirties atkarībā no pašreizējās kultūras.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Konvertēt, izmantojot pielāgotu formātu un vācu kultūru.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Konvertēt, izmantojot standarta laika formātu.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
