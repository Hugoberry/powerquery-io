---
title: Sql.Databases
---

# Sql.Databases


## Description

Vrne tabelo zbirk podatkov v strežniku SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Vrne tabelo zbirk podatkov v navedenem strežniku SQL Server <code>server</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;true&#171;).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.</li><li><code>MaxDegreeOfParallelism</code> : Številka, s katero nastavite vrednost stavka poizvedbe &#187;maxdop&#171; v ustvarjeni poizvedbi strežnika SQL.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;false&#171;).</li><li><code>MultiSubnetFailover</code> : Logična vrednost (true/false), ki nastavi vrednost lastnosti &#187;MultiSubnetFailover&#171; v nizu povezave (privzeta vrednost je &#187;false&#171;).</li><li><code>UnsafeTypeConversions</code> : Logična vrednost (true/false), ki poskusi pregibati pretvorbe vrste, če je &#187;true&#171;. Ta funkcija morda ne bo uspela, zato morda ne bo uspela celotna poizvedba. Ni priporočeno za splošno uporabo.</li><li><code>ContextInfo</code> : Dvojiška vrednost, uporabljena za nastavitev lastnosti CONTEXT_INFO pred zagonom posameznega ukaza.</li><li><code>OmitSRID</code> : Logična vrednost (true/false), ki izpusti SRID pri ustvarjanju dobro znanega besedila iz vrst geometrije in geografije, če je true.</li><li><code>EnableCrossDatabaseFolding</code> : Logična vrednost (true/false). Če je &#187;true&#171;, omogoča pregibanje poizvedb zbirke podatkov v istem strežniku. Privzeta vrednost je &#187;false&#171;.</li></ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2...].    <br />    S tem parametrom poizvedbe strežnika SQL ne morete nastaviti tako, da se izvaja v strežniku. Če želite zagnati poizvedbo strežnika SQL, uporabite <code>Sql.Database</code>.    



## Category
Accessing data
