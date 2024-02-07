---
title: Csv.Document
---

# Csv.Document


Retorna o conteúdo do documento CSV como uma tabela.


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

Retorna o conteúdo do documento CSV como uma tabela.    <ul>      <li>         <code>columns</code> pode ser nulo, o número de colunas, uma lista de nomes de colunas, um tipo de tabela ou um registro de opções.      </li>      <li>         <code>delimiter</code> pode ser um único caractere, uma lista de caracteres ou o valor <code>""</code>, que indica que as linhas devem ser divididas por caracteres de espaço em branco consecutivos. Padrão: <code>","</code>.      </li>      <li>        Consulte <code>ExtraValues.Type</code> para obter os valores suportados de <code>extraValues</code>.      </li>      <li>         <code>encoding</code> especifica o tipo de codificação de texto.      </li>    </ul>    Se um registro for especificado para <code>columns</code> (e <code>delimiter</code>, <code>extraValues</code>, e <code>encoding</code>são nulos), os seguintes campos de registro podem ser fornecidos:    <ul>      <li>        <code>Delimiter</code>: O delimitador da coluna. Padrão: <code>","</code>.      </li>      <li>        <code>Columns</code>: pode ser nulo, o número de colunas, uma lista de nomes de colunas ou um tipo de tabela. Se o número de colunas for menor que o número encontrado na entrada, as colunas adicionais serão ignoradas. Se o número de colunas for maior que o número encontrado na entrada, as colunas adicionais serão nulas. Quando não especificado, o número de colunas será determinado pelo que for encontrado na entrada.      </li>      <li>        <code>Encoding</code>: A codificação de texto do arquivo. Padrão: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: especifica como as aspas são tratadas.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (padrão): as aspas em um campo são significativas apenas imediatamente após o delimitador.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: as aspas em um campo são sempre significativas, independentemente de onde aparecem.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Especifica como as quebras de linha entre aspas são tratadas.        <ul>          <li>            <code>QuoteStyle.Csv</code> (padrão): As quebras de linha entre aspas são tratadas como parte dos dados, não como o final da linha atual.          </li>          <li>            <code>QuoteStyle.None</code>: Todas as quebras de linha são tratadas como o fim da linha atual, mesmo quando ocorrem dentro de um valor entre aspas.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Processa texto CSV com cabeçalhos de coluna
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
