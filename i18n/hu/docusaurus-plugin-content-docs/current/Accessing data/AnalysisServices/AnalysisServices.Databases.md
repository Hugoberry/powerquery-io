---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Az adott gazdagépen található Analysis Services-adatbázisokat adja vissza.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

A(z) <code>server</code> Analysis Services-példányon található adatbázisokat adja vissza. Megadható egy választható rekordparaméter (<code>options</code>) további tulajdonságok meghatározásához. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>TypedMeasureColumns</code> : Egy logikai &#233;rt&#233;k, amely azt hat&#225;rozza meg, hogy a t&#246;bbdimenzi&#243;s vagy t&#225;bl&#225;zatos modellben megadott t&#237;pusok legyenek-e haszn&#225;lva a hozz&#225;adott m&#233;rt&#233;koszlopok t&#237;pusaik&#233;nt. Ha az &#233;rt&#233;ke false (hamis), minden m&#233;rt&#233;koszlophoz a „number” t&#237;pus lesz alkalmazva. A be&#225;ll&#237;t&#225;s alap&#233;rtelmezett &#233;rt&#233;ke a false.</li><li><code>Culture</code> : Az adatok kultur&#225;lis k&#246;rnyezet&#233;t meghat&#225;roz&#243; n&#233;v, amely megfelel a kapcsolati sztring „Ter&#252;letibe&#225;ll&#237;t&#225;s-azonos&#237;t&#243;” tulajdons&#225;g&#225;nak.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k az illesztőtől f&#252;gg.</li><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k az illesztőtől f&#252;gg.</li><li><code>SubQueries</code> : Egy sz&#225;m (0, 1 vagy 2), amely meghat&#225;rozza a „SubQueries” (Seg&#233;dlek&#233;rdez&#233;sek) tulajdons&#225;g &#233;rt&#233;k&#233;t a kapcsolati sztringben. Ez az &#233;rt&#233;k vez&#233;rli a r&#233;szkijel&#246;l&#233;sek &#233;s r&#233;szkock&#225;k sz&#225;m&#237;tott elemeinek viselked&#233;s&#233;t. (Az alap&#233;rtelmezett &#233;rt&#233;k a 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
