---
title: Csv.Document
---

# Csv.Document


## Description

Retorna els continguts del document CSV com a taula.


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

Torna els continguts del document CSV en format de taula.    <ul>      <li>        <code>columns</code> pot ser nul, el nombre de columnes, una llista de noms de columna, un tipus de taula o bé un registre d’opcions.      </li>      <li>        <code>delimiter</code> pot seu un caràcter únic, una llista de caràcters o el valor <code>""</code>, que indica que les files s’han de separar per caràcters en blanc consecutius. Per defecte: <code>","</code>.      </li>      <li>        Consultar <code>ExtraValues.Type</code> pels valors admesos de <code>extraValues</code>.      </li>      <li>        <code>encoding</code> especifica el tipus de codificació del text.      </li>    </ul>    Si s’especifica un registre per <code>columns</code> (i si <code>delimiter</code>, <code>extraValues</code>, i <code>encoding</code> són nuls), es proporcionen els següents camps de registre:    <ul>      <li>        <code>Delimiter</code>: el delimitador de la columna. Per defecte: <code>","</code>.      </li>      <li>        <code>Columns</code>: pot ser nul, el nombre de columnes, una llista de noms de columna o bé un tipus de taula. Si el nombre de columnes és inferior al nombre trobat a l’entrada, s’ignoren les columnes addicionals. Si el nombre de columnes és superior al nombre trobat a l’entrada, les columnes addicionals seran nul·les. Si no s’especifica, el nombre de columnes serà determinat pel que es trobi a l’entrada.      </li>      <li>        <code>Encoding</code>: la codificació de text de l’arxiu. Per defecte: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: especifica com es controlen les cometes.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (per defecte): les cometes dins d’un camp només són significatives si segueixen al delimitador.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: les cometes dins d’un camp sempre són significatives, independentment d’on apareguin.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: especifica com es controlen els salts de línia entre cometes.        <ul>          <li>            <code>QuoteStyle.Csv</code> (per defecte): els salts de línia entre cometes es tracten com a part de les dades i no com la terminació de la fila actual.          </li>          <li>            <code>QuoteStyle.None</code>: tots els salts de línia es tracten com a terminacions de la fila actual, encara que estiguin entre cometes.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Processa el text CSV amb capçaleres de columnes
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
