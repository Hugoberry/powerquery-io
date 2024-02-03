---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Vrátí tabulku s obsahem ze sharepointového seznamu.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku obsahující řádek pro každou položku seznamu nalezenou v zadaném sharepointovém seznamu <code>url</code>. Každý řádek obsahuje vlastnosti seznamu. Je možné zadat: <code>options</code> a řídit tak následující možnosti:    <ul><li><code>ApiVersion</code> : Č&#237;slo (14 nebo 15) nebo text „Auto“, kter&#253; určuje verzi rozhran&#237; API SharePointu, kter&#225; se m&#225; pro tento web použ&#237;vat. Když se tato možnost nezad&#225;, použije se rozhran&#237; API ve verzi 14. Při zad&#225;n&#237; možnosti Auto se automaticky zjist&#237; verze serveru, a když to nen&#237; možn&#233;, nastav&#237; se v&#253;choz&#237; verze 14. Weby SharePointu jin&#233; než anglick&#233; vyžaduj&#237; aspoň verzi 15.</li><li><code>Implementation</code> : Voliteln&#233;. Určuje, kter&#225; verze konektoru SharePointu se m&#225; použ&#237;t. Př&#237;pustn&#233; hodnoty jsou 2.0 nebo null. Pokud je hodnota 2.0, použije se implementace 2.0 konektoru SharePointu. Pokud je hodnota null, použije se původn&#237; implementace konektoru SharePointu.</li><li><code>ViewMode</code> : Voliteln&#233;. Tato možnost je platn&#225; jenom pro implementaci 2.0. Př&#237;pustn&#233; hodnoty jsou Vše a V&#253;choz&#237;. Pokud nen&#237; zad&#225;na ž&#225;dn&#225; hodnota, je hodnota nastavena na hodnotu Vše. Pokud je zad&#225;na možnost Vše, zobrazen&#237; zahrnuje všechny sloupce vytvořen&#233; uživatelem a syst&#233;mem definovan&#233; sloupce. Pokud je zad&#225;na možnost V&#253;choz&#237;, bude se zobrazen&#237; shodovat s t&#237;m, co uživatel uvid&#237; při prohl&#237;žen&#237; seznamu online v libovoln&#233;m zobrazen&#237;, kter&#233; uživatel v nastaven&#237; nastavil jako V&#253;choz&#237;. Pokud uživatel uprav&#237; sv&#233; v&#253;choz&#237; zobrazen&#237; tak, aby přidal nebo odebral sloupce vytvořen&#233; uživatelem nebo definovan&#233; syst&#233;mem, nebo vytvořen&#237;m nov&#233;ho zobrazen&#237; a jeho nastaven&#237;m jako v&#253;choz&#237;ho, budou tyto změny rozš&#237;řeny prostřednictv&#237;m konektoru.</li><li><code>DisableAppendNoteColumns</code> : Zabr&#225;n&#237; konektoru v použit&#237; samostatn&#233;ho koncov&#233;ho bodu pro sloupce pozn&#225;mek.</li></ul>    



## Category
Accessing data
