---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Egy SharePoint-lista tartamát tartalmazó táblát ad vissza.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Egy olyan táblát ad vissza, amely a megadott SharePoint-listán (<code>url</code>) talált minden egyes listaelemhez tartalmaz egy sort. Minden egyes sor tartalmazza a lista tulajdonságait. A(z) <code>options</code> elemet a következő lehetőségek meghatározásához lehet megadni:    <ul><li><code>ApiVersion</code> : Egy sz&#225;m (14 vagy 15) vagy az „Auto” sz&#246;veg, amely a webhelyhez haszn&#225;latos SharePoint API-verzi&#243;t adja meg. Ha nincs megadva, a 14-es verzi&#243;t haszn&#225;lja a rendszer. Amikor az Auto sz&#246;veg van megadva, a rendszer lehetős&#233;g szerint automatikusan &#233;szleli a kiszolg&#225;l&#243;verzi&#243;t, egy&#233;bk&#233;nt alap&#233;rtelmez&#233;s szerint a 14-es verzi&#243;t haszn&#225;lja. Az angolt&#243;l elt&#233;rő nyelvű SharePoint-webhelyekhez legal&#225;bb 15-&#246;s verzi&#243;t kell haszn&#225;lni.</li><li><code>Implementation</code> : V&#225;laszthat&#243;. A SharePoint-&#246;sszek&#246;tő haszn&#225;land&#243; verzi&#243;j&#225;t hat&#225;rozza meg. Az elfogadott &#233;rt&#233;kek a k&#246;vetkezők: „2.0” vagy null. Ha az &#233;rt&#233;k „2.0”, a rendszer a SharePoint-&#246;sszek&#246;tő 2.0-s implement&#225;ci&#243;j&#225;t haszn&#225;lja. Ha az &#233;rt&#233;k null, a rendszer a SharePoint-&#246;sszek&#246;tő eredeti implement&#225;ci&#243;j&#225;t haszn&#225;lja.</li><li><code>ViewMode</code> : V&#225;laszthat&#243;. Ez a be&#225;ll&#237;t&#225;s csak a 2.0-s implement&#225;ci&#243; eset&#233;n &#233;rv&#233;nyes. Az elfogadott &#233;rt&#233;kek a k&#246;vetkezők: „Mind” &#233;s „Alap&#233;rtelmezett”. Ha nincs megadva &#233;rt&#233;k, a rendszer a „Mind” &#233;rt&#233;ket &#225;ll&#237;tja be. Ha a „Mind” &#233;rt&#233;k van megadva, a n&#233;zet az &#246;sszes felhaszn&#225;l&#243; &#225;ltal l&#233;trehozott &#233;s rendszer &#225;ltal defini&#225;lt oszlopot tartalmazza. Ha az „Alap&#233;rtelmezett” &#233;rt&#233;k van megadva, a n&#233;zet megegyezik azzal, amit a felhaszn&#225;l&#243; l&#225;t, amikor online n&#233;zi meg a list&#225;t abban a n&#233;zetben, amelyet a felhaszn&#225;l&#243; alap&#233;rtelmezettk&#233;nt &#225;ll&#237;tott be a be&#225;ll&#237;t&#225;saiban. Ha a felhaszn&#225;l&#243; m&#243;dos&#237;tja az alap&#233;rtelmezett n&#233;zetet a felhaszn&#225;l&#243; &#225;ltal l&#233;trehozott vagy a rendszer &#225;ltal defini&#225;lt oszlopok hozz&#225;ad&#225;s&#225;val vagy elt&#225;vol&#237;t&#225;s&#225;val, vagy egy &#250;j n&#233;zet l&#233;trehoz&#225;s&#225;val &#233;s alap&#233;rtelmezettk&#233;nt val&#243; be&#225;ll&#237;t&#225;s&#225;val, ezek a m&#243;dos&#237;t&#225;sok az &#246;sszek&#246;tőn kereszt&#252;l propag&#225;lva lesznek.</li><li><code>DisableAppendNoteColumns</code> : Megakad&#225;lyozza, hogy az &#246;sszek&#246;tő k&#252;l&#246;n v&#233;gpontot haszn&#225;ljon a jegyzetoszlopokhoz.</li></ul>    



## Category
Accessing data
