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

Retorna o conteúdo do documento CSV como uma tabela.

-   `columns` pode ser nulo, o número de colunas, uma lista de nomes de colunas, um tipo de tabela ou um registro de opções.
-   `delimiter` pode ser um único caractere, uma lista de caracteres ou o valor `""`, que indica que as linhas devem ser divididas por caracteres de espaço em branco consecutivos. Padrão: `","`.
-   Consulte `ExtraValues.Type` para obter os valores com suporte de `extraValues`.
-   `encoding` especifica o tipo de codificação de texto.

Se um registro for especificado para `columns` (e `delimiter`, `extraValues` e `encoding` forem nulos), os seguintes campos de registro podem ser fornecidos:

-   `Delimitador`: um delimitador de coluna de caractere único. Padrão: `","`.
-   `Colunas`: pode ser nulo, o número de colunas, uma lista de nomes de coluna ou um tipo de tabela. Se o número de colunas for menor que o número encontrado na entrada, as colunas adicionais serão ignoradas. Se o número de colunas for maior que o número encontrado na entrada, as colunas adicionais serão nulas. Quando não for especificado, o número de colunas será determinado pelo que é encontrado na entrada.
-   `Codificação`: a codificação de texto do arquivo. Padrão: 65001 (UTF-8).
-   `CsvStyle`: especifica como as aspas são tratadas.
    -   `CsvStyle.QuoteAfterDelimiter` (padrão): as aspas em um campo são significativas apenas imediatamente após o delimitador.
    -   `CsvStyle.QuoteAlways`: as aspas em um campo são sempre significativas, independentemente de onde aparecem.
-   `QuoteStyle`: especifica como as quebras de linha entre aspas são tratadas.
    -   `QuoteStyle.Csv` (padrão): quebras de linha entre aspas são tratadas como parte dos dados, não como o final da linha atual.
    -   `QuoteStyle.None`: todas as quebras de linha são tratadas como o final da linha atual, mesmo quando ocorrem dentro de um valor entre aspas.
-   `IncludeByteOrderMark`: um valor lógico que indica se uma BOM (Marca de Ordem de Byte) deve ser inclusa no início da saída CSV. Quando definido como true, a BOM é gravada (por exemplo, UTF-8 BOM: `0xEF 0xBB 0xBF`); quando definido como false, nenhuma BOM é incluída. Essa opção é aplicável somente em cenários de saída. O padrão é `false`.
-   `ExtraValues`: consulte `ExtraValues.Type` para obter os valores com suporte de ExtraValues.


## Examples

### Example #1
Processar texto CSV com cabeçalhos de coluna.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
