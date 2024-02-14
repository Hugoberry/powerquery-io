---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Devolve um formato binário que lê um grupo de itens.


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

Os parâmetros são os seguintes:<ul><li>O parâmetro <code>binaryFormat</code> especifica o formato binário do valor de chave.</li><li>O parâmetro <code>group</code> fornece informações sobre o grupo de itens conhecidos.</li><li>O parâmetro <code>extra</code> opcional pode ser utilizado para especificar uma função que devolverá um valor de formato binário para o valor resultante de qualquer chave inesperada. Se o parâmetro <code>extra</code> não for especificado, será gerado um erro se surgirem valores de chave inesperados.</li></ul>O parâmetro <code>group</code> especifica uma lista de definições de itens.  Cada definição de item é uma lista, com 3 a 5 valores, tal como se segue:<ul><li>Valor de chave. O valor da chave que corresponde ao item.  Tem de ser exclusivo no conjunto de itens.</li><li>Formato de item.  O formato binário que corresponde ao valor do item.  Tal permite que cada item tenha um formato diferente. </li><li>Ocorrência de item.  O valor <code>BinaryOccurrence.Type</code> relativo ao número de vezes que se espera que o item apareça no grupo.   Os itens obrigatórios que não estejam presentes causam um erro.  Os itens duplicados obrigatórios ou opcionais são processados como valores de chave inesperados.</li><li>Valor de item predefinido (opcional). Se o valor de item predefinido aparecer na lista de definições de itens e não for nulo, será utilizado em vez da predefinição.  A predefinição para itens de repetição ou opcionais é nula e a predefinição para valores de repetição é uma lista vazia \{ }.</li><li>Transformação do valor de item (opcional). Se a função de transformação do valor de item estiver presente na lista de definições de itens e não for nula, será chamada para transformar o valor de item antes de este ser devolvido.  A função de transformação só será chamada se o item aparecer na entrada (nunca será chamada com o valor predefinido). </li></ul>


## Examples

### Example #1 
O que se segue assume um valor de chave de byte único, com 4 itens esperados no grupo, sendo que todos eles têm um byte de dados a seguir à chave.  Os itens aparecem na entrada do seguinte modo:&lt;ul&gt;&lt;li&gt;A chave 1 é obrigatória e aparece com o valor 11.&lt;/li&gt;&lt;li&gt;A chave 2 repete-se e aparece duas vezes com o valor 22, resultando num valor igual a \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;A chave 3 é opcional e não aparece, resultando num valor nulo.&lt;/li&gt;&lt;li&gt;A chave 4 repete-se, mas não aparece, resultando num valor igual a \{ }.&lt;/li&gt;&lt;li&gt;A chave 5 não faz parte do grupo, mas aparece uma vez com o valor 55.  A função adicional é chamada com o valor de chave 5 e devolve o formato correspondente a esse valor (BinaryFormat.Byte).  O valor 55 é lido e eliminado.&lt;/li&gt;&lt;/ul&gt;
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
O exemplo que se segue ilustra a transformação do valor de item e o valor de item predefinido.   O item de repetição com a chave 1 soma a lista de valores lidos com List.Sum.  O item opcional com a chave 2 tem o valor predefinido 123 em vez de nulo.
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
