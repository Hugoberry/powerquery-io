---
title: Csv.Document
---

# Csv.Document


Devolve o conteúdo do documento CSV como uma tabela.


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


## Remarks

Devolve o conteúdo do documento CSV como uma tabela.    <ul>     <li>         <code>columns</code> pode ser nulo, o número de colunas, uma lista de nomes de colunas, um tipo de tabela ou um registo de opções.    </li>     <li>       <code>delimiter</code> pode ser um único caráter, uma lista de carateres, ou o valor <code>""</code>, que indica que as linhas têm de ser divididas por carateres de espaço em branco consecutivos. Predefinição: <code>","</code>.     </li>     <li>      Consulte o <code>ExtraValues.Digite </code> para saber os valores suportados de <code>extraValues</code>.     </li>     <li>        <code>encoding</code> especifica o tipo de codificação do texto.     </li>    </ul>    Se um registo for especificado para <code>columns</code> (e <code>delimiter</code>, <code>extraValues</code>, e<code>encoding</code> forem nulos), podem ser fornecidos os seguintes campos de registo:    <ul>      <li>     <code>Delimiter</code>: o delimitador de colunas. Predefinição: <code>","</code>.      </li>      <li>     <code>Columns</code>: pode ser nulo, o número de colunas, uma lista de nomes de colunas ou um tipo de tabela. Se o número de colunas for inferior ao número encontrado na entrada, as colunas adicionais são ignoradas. Se o número de colunas for superior ao número encontrado na entrada, as colunas adicionais irão ser nulas. Quando não for especificado, o número de colunas é determinado pelo que é encontrado na entrada.      </li>      <li>     <code>Encoding</code>: a codificação de texto do ficheiro. Predefinição: 65001 (UTF-8).      </li>      <li>     <code>CsvStyle</code>: especifica como são processadas as aspas.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (predefinição): as aspas num campo são apenas significantes se imediatamente a seguir ao delimitador.          </li>          <li>             <code>CsvStyle.QuoteAlways</code>: as aspas num campo são sempre significantes, independentemente de onde apareçam.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: especifica como são processadas as quebras de linha em aspas.        <ul>          <li>              <code>QuoteStyle.Csv</code> (predefinição): As quebras de linha entre aspas são tratadas como parte dos dados e não como o fim da linha atual.          </li>          <li>           <code>QuoteStyle.None</code>: Todas as quebras de linha são tratadas como o fim da linha atual, mesmo quando elas ocorrem dentro de um valor entre aspas.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Processar texto em formato CSV com cabeçalhos de colunas
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
