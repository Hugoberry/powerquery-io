---
title: Csv.Document
---

# Csv.Document


## Description

Devolve o contido do documento CSV como unha táboa.


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

Devolve o contido do documento CSV como táboa.    <ul>      <li>        <code>columns</code> pode ser nulo, o número de columnas, unha lista de nomes de columna, un tipo de táboa ou un rexistro de opcións.      </li>      <li>        <code>delimiter</code> pode ser un só carácter, unha lista de caracteres ou o valor <code>""</code>, que indica que as filas deben dividirse por caracteres de espazo en branco consecutivos. Valor predeterminado: <code>","</code>.      </li>      <li>        Consulte <code>ExtraValues.Type</code> para obter os valores admitidos de <code>extraValues</code>.      </li>       <li>        <code>encoding</code> especifica o tipo de codificación de texto.      </li>    </ul>    Se se especifica un rexistro para <code>columns</code> (e <code>delimiter</code>, <code>extraValues</code>e <code>encoding</code> son nulos), pódense proporcionar os seguintes campos de rexistro:    <ul>      <li>        <code>Delimiter</code>: delimitador de columna. Valor predeterminado: <code>","</code>.      </li>      <li>        <code>Columns</code>: pode ser nulo, o número de columnas, unha lista de nomes de columna ou un tipo de táboa. Se o número de columnas é menor que o número atopado na entrada, omitiranse as columnas adicionais. Se o número de columnas é maior que o número atopado na entrada, as columnas adicionais serán nulas. Cando non se especifica, o número de columnas vén determinado polo que se topa na entrada.      </li>      <li>        <code>Encoding</code>: codificación de texto do ficheiro. Valor predeterminado: 65001 (UTF-8).      </li>      <li>         <code>CsvStyle</code>: especifica como se controlan as comiñas.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (valor predeterminado): as comiñas dun campo só son significativas inmediatamente despois do delimitador.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: as comiñas dun campo sempre son significativas, independentemente de onde aparezan.          </li>        </ul>      </li>      <li>            <code>QuoteStyle</code>: especifica como se controlan os saltos de liña entre comiñas.        <ul>          <li>            <code>QuoteStyle.Csv</code> (valor predeterminado): os saltos de liña entre comiñas trátanse como parte dos datos, non coma a fin da fila actual.          </li>          <li>            <code>QuoteStyle.None</code>: todos os saltos de liña se tratan como a fin da fila actual, incluso cando se producen dentro dun valor entre comiñas.          </li>        </ul>     </li>    </ul>..


## Examples

### Example #1 
Procesar texto CSV con cabeceiras de columna
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
