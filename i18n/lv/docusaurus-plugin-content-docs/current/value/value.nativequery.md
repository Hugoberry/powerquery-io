---
title: Value.NativeQuery
---

# Value.NativeQuery


Novērtē vaicājumu attiecībā pret mērķi.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

Novērtē `query` attiecībā pret `target`, izmantojot vienumā `parameters` norādītos parametrus un vienumā `options` norādītās opcijas.

Vaicājuma rezultātu nosaka `target`.

`target` norāda kontekstu operācijai, ko apraksta `query`.

`query` apraksta vaicājumu, kas jāizpilda attiecībā pret `target`. `query` tiek izteikts parametram `target` raksturīgā veidā (piemēram, T-SQL priekšraksta veidā).

Izvēles vērtība `parameters` var saturēt sarakstu vai ierakstu atkarībā no tā, kas nepieciešams, lai nodrošinātu parametra vērtības, ko paredz `query`.

Izvēles ieraksts `options` var saturēt opcijas, kas ietekmē parametra `query` novērtēšanas uzvedību attiecībā pret `target`. Šīs opcijas ir raksturīgas parametram `target`.



## Category
Values
