---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Az Excel-munkafüzet tartalmát adja vissza.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Az Excel-munkafüzet tartalmát adja vissza.    <ul>     <li> A(z) <code>useHeaders</code> lehet null értékű vagy logikai (igaz/hamis) érték, amely azt adja meg, hogy a rendszer fejlécként kezelje-e a visszaadott táblázatok első sorát, vagy pedig beállításrekordról van szó. Alapértelmezett érték: hamis.</li>     <li> A(z) <code>delayTypes</code> lehet null értékű vagy logikai (igaz/hamis) érték, amely azt adja meg, hogy a visszaadott táblázatok oszlopai nem típusosak maradjanak-e. Alapértelmezett érték: hamis.</li>    </ul>    Ha meg van adva rekord a(z) <code>useHeaders</code> esetében (és a(z) <code>delayTypes</code> null értékű), a következő rekordmezők jelenhetnek meg:    <ul>     <li> <code>UseHeaders</code>: Lehet null értékű vagy logikai (igaz/hamis) érték, amely azt adja meg, hogy a rendszer fejlécként kezelje-e a visszaadott táblázatok első sorát. Alapértelmezett érték: hamis.</li>     <li> <code>DelayTypes</code>: Lehet null értékű vagy logikai (igaz/hamis) érték, amely azt adja meg, hogy a visszaadott táblázatok oszlopai nem típusosak maradjanak-e. Alapértelmezett érték: hamis.</li>     <li> <code>InferSheetDimensions</code>: Lehet null értékű vagy logikai (igaz/hamis) érték, amely azt adja meg, hogy a munkafüzet adatokat tartalmazó területét a rendszer a munkafüzet beolvasásával következtesse-e ki, a méretek metaadatainak a fájlból történő beolvasása helyett. Ez olyan esetekben lehet hasznos, amikor a méretek metaadatai nem megfelelőek. Vegye figyelembe, hogy ez a lehetőség csak Open XML Excel-fájlok esetében támogatott, régi Excel-fájlok esetében nem. Alapértelmezett érték: hamis.</li>    </ul>    


## Examples

### Example #1 
A Munka1 tartalmának visszaadása egy Excel-munkafüzetből.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
