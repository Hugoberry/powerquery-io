---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

Novērtē <code>query</code> attiecībā pret <code>target</code>, izmantojot vienumā <code>parameters</code> norādītos parametrus un vienumā <code>options</code> norādītās opcijas.<br />Vaicājuma rezultātu nosaka <code>target</code>.<br /><code>target</code> norāda kontekstu operācijai, ko apraksta <code>query</code>.<br /><code>query</code> apraksta vaicājumu, kas jāizpilda attiecībā pret <code>target</code>. <code>query</code> tiek izteikts parametram <code>target</code> raksturīgā veidā (piemēram, T-SQL priekšraksta veidā).<br />Izvēles vērtība <code>parameters</code> var saturēt sarakstu vai ierakstu atkarībā no tā, kas nepieciešams, lai nodrošinātu parametra vērtības, ko paredz <code>query</code>.<br />Izvēles ieraksts <code>options</code> var saturēt opcijas, kas ietekmē parametra <code>query</code> novērtēšanas uzvedību attiecībā pret <code>target</code>. Šīs opcijas ir raksturīgas parametram <code>target</code>.<br />



## Category
Values
