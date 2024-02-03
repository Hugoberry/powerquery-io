---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Egy PDF-fájlban talált táblákat ad vissza.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

A következőben található összes táblát visszaadja: <code>pdf</code>. Megadható egy választható rekordparaméter (<code>options</code>) további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>Implementation</code> : A t&#225;bl&#225;k azonos&#237;t&#225;s&#225;hoz haszn&#225;land&#243; algoritmus verzi&#243;ja. A r&#233;gi verzi&#243;k csak a visszamenőleges kompatibilit&#225;s &#233;rdek&#233;ben &#233;rhetők el, hogy a r&#233;gi lek&#233;rdez&#233;sek ne v&#225;ljanak haszn&#225;lhatatlann&#225; az algoritmusfriss&#237;t&#233;sek miatt. Mindig a leg&#250;jabb verzi&#243;nak kell a legjobb eredm&#233;nyt adnia. Az &#233;rv&#233;nyes &#233;rt&#233;kek a k&#246;vetkezők: „1.3”, „1.2”, „1.1“ vagy null.</li><li><code>StartPage</code> : Meghat&#225;rozza a vizsg&#225;land&#243; oldaltartom&#225;ny első oldal&#225;t. Alap&#233;rtelmezett &#233;rt&#233;k: 1.</li><li><code>EndPage</code> : Meghat&#225;rozza a vizsg&#225;land&#243; oldaltartom&#225;ny utols&#243; oldal&#225;t. Alap&#233;rtelmezett &#233;rt&#233;k: a dokumentum utols&#243; oldala.</li><li><code>MultiPageTables</code> : Meghat&#225;rozza, hogy az egym&#225;st k&#246;vető lapokon l&#233;vő, hasonl&#243; t&#225;bl&#225;k automatikusan egyes&#237;tve lesznek-e egyetlen t&#225;bl&#225;ba. Alap&#233;rtelmezett &#233;rt&#233;k: igaz.</li><li><code>EnforceBorderLines</code> : Meghat&#225;rozza, hogy a szeg&#233;lyvonalakat mindig cellahat&#225;rk&#233;nt haszn&#225;lja-e a rendszer (ha igaz), vagy hogy t&#246;bb m&#225;s v&#233;grehajt&#225;si m&#243;dos&#237;t&#243;val egy&#252;tt haszn&#225;lja őket a cellahat&#225;rok meghat&#225;roz&#225;s&#225;hoz (ha hamis). Alap&#233;rtelmezett &#233;rt&#233;k: hamis.</li></ul>    


## Examples

### Example #1 
Visszaadja a sample.pdf fájlban található táblázatokat.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Adatok elérése
