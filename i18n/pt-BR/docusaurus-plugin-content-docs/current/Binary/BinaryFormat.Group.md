---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Retorna um formato binário que lê um grupo de itens.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Os parâmetros são os seguintes:<ul><li>O parâmetro <code>binaryFormat</code> especifica o formato binário do valor de chave.</li><li>O parâmetro <code>group</code> fornece informações sobre o grupo de itens conhecidos.</li><li>O parâmetro opcional <code>extra</code> pode ser usado para especificar uma função que retornará um valor de formato binário para o valor depois de qualquer chave inesperada.  Se o parâmetro <code>extra</code> não for especificado, será gerado um erro se houver valores de chave inesperados.</li></ul>O parâmetro <code>group</code> especifica uma lista de definições de item. Cada definição do item é uma lista, que contém 3 a 5 valores, da seguinte forma:<ul><li>Valor de chave.  O valor da chave correspondente ao item. Ele deve ser exclusivo no conjunto de itens.</li><li>Formato de item. O formato binário correspondente ao valor do item. Isso permite que cada item tenha um formato diferente. </li><li>Ocorrência do item. O valor <code>BinaryOccurrence.Type</code> para quantas vezes o item deve aparecer no grupo. Os itens necessários que não estão presentes causam um erro.  Os itens necessários ou opcionais duplicados são tratados como valores de chave inesperados.</li><li>Valor de item padrão (opcional). Se o valor do item padrão aparecer na lista de definições de item e não for nulo, ele será usado, em vez do padrão. O padrão para itens repetidos ou opcionais é nulo e o padrão para valores repetidos é uma lista vazia \{ }.</li><li>Transformação de valor de item (opcional).   Se a função de transformação do valor de item estiver presente na lista de definições de item e não for nula, ela será chamada para transformar o valor do item antes de ser retornado. A função de transformação será chamada somente se o item aparecer na entrada (ela nunca será chamada com o valor padrão). </li></ul>


## Examples

### Example #1 
O item a seguir pressupõe um valor de chave de um único byte, com 4 itens esperados no grupo, sendo que todos têm um byte de dados após a chave.  Os itens aparecem na entrada da seguinte forma:&lt;ul&gt;&lt;li&gt;A chave 1 é necessária e aparece com o valor 11.&lt;/li&gt;&lt;li&gt;A chave 2 se repete e aparece duas vezes com o valor 22 e resulta em um valor de \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;A chave 3 é opcional e não aparece e resulta em um valor nulo.&lt;/li&gt;&lt;li&gt;A chave 4 se repete, mas não aparece e resulta em um valor de \{ }.&lt;/li&gt;&lt;li&gt;A chave 5 não faz parte do grupo, mas aparece uma vez com o valor 55.  A função extra é chamada com o valor de chave 5 e retorna o formato correspondente a esse valor (BinaryFormat.Byte).  O valor 55 é lido e descartado.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
O exemplo a seguir mostra a transformação do valor do item e o valor do item padrão.   O item repetido com a chave 1 soma a lista de valores lidos usando List.Sum.  O item opcional com a chave 2 tem um valor padrão 123, em vez de nulo.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
