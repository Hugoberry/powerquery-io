---
title: Sql.Databases
---

# Sql.Databases


## Description

Vrátí tabulku databází na serveru SQL.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Vrací tabulku databází na zadaném SQL serveru <code>server</code>. Pomocí nepovinného parametru záznamu <code>options</code> můžete řídit následující možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; u vr&#225;cen&#253;ch hodnot generovat navigačn&#237; vlastnosti (v&#253;choz&#237; hodnota je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkce použ&#237;van&#225; ke generov&#225;n&#237; n&#225;zvů navigačn&#237;ch vlastnost&#237;.</li><li><code>MaxDegreeOfParallelism</code> : Č&#237;slo, kter&#233; určuje hodnotu klauzule dotazu maxdop v generovan&#233;m dotazu SQL.</li><li><code>CommandTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho může dotaz b&#253;t dotaz na straně serveru spuštěn&#253;, než se zruš&#237;. V&#253;choz&#237; hodnota je 10 minut.</li><li><code>ConnectionTimeout</code> : Doba trv&#225;n&#237;, kter&#225; ř&#237;d&#237;, jak dlouho se m&#225; čekat, než se pokus o připojen&#237; k serveru opust&#237;. V&#253;choz&#237; hodnota z&#225;vis&#237; na ovladači.</li><li><code>HierarchicalNavigation</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje, jestli se maj&#237; tabulky zobrazit seskupen&#233; podle sv&#253;ch n&#225;zvů sch&#233;mat (v&#253;choz&#237; hodnota je false).</li><li><code>MultiSubnetFailover</code> : Logick&#253; parametr (true/false), kter&#253; nastavuje hodnotu vlastnosti MultiSubnetFailover v připojovac&#237;m řetězci (v&#253;choz&#237; hodnota je false).</li><li><code>UnsafeTypeConversions</code> : Logick&#225; hodnota (true/false), kter&#225; se při hodnotě true pokus&#237; posunout převody typů, kter&#233; by mohly selhat a způsobit selh&#225;n&#237; cel&#233;ho dotazu. Nedoporučuje se pro obecn&#233; použit&#237;.</li><li><code>ContextInfo</code> : Bin&#225;rn&#237; hodnota, kter&#225; se použ&#237;v&#225; k nastaven&#237; CONTEXT_INFO před spuštěn&#237;m jednotliv&#253;ch př&#237;kazů</li><li><code>OmitSRID</code> : Logick&#225; hodnota (true/false), kter&#225; při hodnotě true při vytv&#225;řen&#237; Well-Known Text z geometrick&#253;ch a geografick&#253;ch typů vynech&#225; SRID.</li><li><code>EnableCrossDatabaseFolding</code> : Logick&#225; hodnota (true/false), kter&#225; v př&#237;padě hodnoty true povoluje posouv&#225;n&#237; dotazů mezi datab&#225;zemi na stejn&#233;m serveru. V&#253;choz&#237; hodnota je false.</li></ul>    Parametr záznamu se zadává například ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].    <br />    Nepodporuje nastavení dotazu SQL, aby se spustil na serveru. Ke spuštění dotazu SQL se místo toho používá <code>Sql.Database</code>.    



## Category
Accessing data
