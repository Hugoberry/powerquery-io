---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Vráti tabuľku SQL tabuliek a zobrazení zo zdroja údajov ODBC. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Vráti tabuľku SQL tabuliek a zobrazení zo zdroja údajov ODBC zadaného reťazcom pripojenia <code>connectionString</code>. <code>connectionString</code> môže byť text alebo záznam párov hodnôt vlastností. Hodnoty vlastností môžu byť číselné alebo textové. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>CreateNavigationProperties</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; generovať vlastnosti navig&#225;cie v pr&#237;pade vr&#225;ten&#253;ch hodn&#244;t (predvolen&#225; hodnota je True).</li><li><code>HierarchicalNavigation</code> : Logick&#225; hodnota (True/False), ktor&#225; nastavuje, či sa maj&#250; zobraziť tabuľky zoskupen&#233; podľa n&#225;zvov sch&#233;my (predvolen&#225; hodnota je False).</li><li><code>ConnectionTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho sa m&#225; čakať pred zanechan&#237;m pokusu o pripojenie k serveru. Predvolen&#225; hodnota je 15 sek&#250;nd.</li><li><code>CommandTimeout</code> : Trvanie, ktor&#233; určuje, ako dlho smie byť spusten&#253; dotaz na strane servera pred zrušen&#237;m dotazu. Predvolen&#225; hodnota je desať min&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Logick&#225; hodnota (true/false), ktor&#225; určuje, či sa pre overovanie Windowsom maj&#250; vygenerovať možnosti reťazca pripojenia kompatibiln&#233; s SQL Serverom. Predvolen&#225; hodnota je true.</li></ul>


## Examples

### Example #1 
Vráti tabuľky a zobrazenia SQL zo zadaného reťazca pripojenia.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
