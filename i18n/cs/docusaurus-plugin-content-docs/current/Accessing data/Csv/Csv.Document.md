---
title: Csv.Document
---

# Csv.Document


## Description

Vrátí obsah dokumentu CSV jako tabulku.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Vrátí obsah dokumentu CSV jako tabulku.    <ul>      <li>        <code>columns</code> může být null, počet sloupců, seznam názvů sloupců, typ tabulky nebo záznam možností.      </li>      <li>        <code>delimiter</code> může být jeden znak, seznam znaků nebo výchozí hodnota: <code>","</code>, která naznačuje, že řádky by měly být rozděleny po sobě následujícími prázdnými znaky. Výchozí hodnota: <code>","</code>.      </li>      <li>        Podporované hodnoty pro <code>extraValues</code> najdete v <code>ExtraValues.Type</code>.      </li>      <li>        <code>encoding</code> určuje typ kódování textu.      </li>    </ul>    Pokud je pro <code>columns</code> zadán záznam (a <code>delimiter</code>, <code>extraValues</code>, a <code>encoding</code> jsou null), mohou být k dispozici následující pole záznamu:    <ul>      <li>        <code>Delimiter</code>: Oddělovač sloupců. Výchozí hodnota: <code>","</code>.      </li>      <li>        <code>Columns</code>: Může být null, počet sloupců, seznam názvů sloupců nebo typ tabulky. Pokud je počet sloupců nižší než počet na vstupu, budou dodatečné sloupce ignorovány. Pokud je počet sloupců vyšší než počet na vstupu, dodatečné slupce budou vyplněny hodnotou null. Pokud počet není zadán, bude počet sloupců určen tím, kolik sloupců bylo nalezeno na vstupu.      </li>      <li>        <code>Encoding</code>: Kódování textu souboru. Výchozí hodnota: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Určuje, jak se bude zacházet s uvozovkami.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (výchozí): Uvozovky v poli jsou významné pouze bezprostředně po oddělovači.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Uvozovky v poli jsou vždy významné, ať se objevují kdekoli.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Určuje, jak se bude zacházet s konci řádků v uvozovkách.        <ul>          <li>            <code>QuoteStyle.Csv</code> (výchozí): S konci řádků v uvozovkách se zachází jako se součástí dat, nikoli jako s konci aktuálního řádku.          </li>          <li>            <code>QuoteStyle.None</code>: Se všemi konci řádků se zachází jako s konci aktuálního řádku, i když se nacházejí uvnitř hodnoty v uvozovkách.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Zpracuje text CSV se záhlavími sloupců.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
