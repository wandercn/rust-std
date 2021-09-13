initSidebarItems({"fn":[["empty","创建一个不产生任何结果的迭代器。"],["from_fn","创建一个新的迭代器，每次迭代都调用提供的闭包 `F: FnMut() -> Option<T>`。"],["once","创建一个迭代器，该迭代器只生成一次元素。"],["once_with","创建一个迭代器，该迭代器通过调用提供的闭包来懒惰地一次生成一个值。"],["repeat","创建一个新的迭代器，该迭代器不断重复单个元素。"],["repeat_with","创建一个新的迭代器，方法是应用提供的闭包，转发器，无限地重复 `A` 类型的元素， `F: FnMut() -> A`."],["successors","创建一个新的迭代器，在该迭代器的基础上，每个连续项都根据前一个进行计算。"],["zip","将参数转换为迭代器并压缩它们。"]],"struct":[["Chain","链中将两个迭代器链接在一起的迭代器。"],["Cloned","一个迭代器，可克隆基础迭代器的元素。"],["Copied","复制基础迭代器元素的迭代器。"],["Cycle","无限重复的迭代器。"],["Empty","没有任何结果的迭代器。"],["Enumerate","一个在迭代过程中产生当前计数和元素的迭代器。"],["Filter","一个用 `predicate` 过滤 `iter` 元素的迭代器。"],["FilterMap","一个使用 `f` 来过滤 `iter` 中的元素和 map 元素的迭代器。"],["FlatMap","Z0 将每个元素映射到一个迭代器，并产生所生成的迭代器的元素的迭代器。"],["Flatten","一个迭代器，它使可迭代化的事物的迭代器中的嵌套层次变得平坦。"],["FromFn","一个迭代器，每次迭代调用提供的闭包 `F: FnMut() -> Option<T>`。"],["Fuse","在基础迭代器一次生成 `None` 之后，将永远生成 `None` 的迭代器。"],["Inspect","一个迭代器，在产生该迭代器之前，会对每个元素调用带有引用的函数。"],["Intersperse","在所有元素之间放置分隔符的迭代器适配器。"],["IntersperseWith","在所有元素之间放置分隔符的迭代器适配器。"],["Map","将 `iter` 的值与 `f` 映射的迭代器。"],["MapWhile","一个仅在 `predicate` 返回 `Some(_)` 时才接受元素的迭代器。"],["Once","一个仅产生一次元素的迭代器。"],["OnceWith","通过应用提供的闭包 `F: FnOnce() -> A` 产生类型为 `A` 的单个元素的迭代器。"],["Peekable","带有 `peek()` 的迭代器，该迭代器将可选的引用返回到下一个元素。"],["Repeat","一个无限重复元素的迭代器。"],["RepeatWith","一个迭代器，通过应用提供的闭包 `F: FnMut() -> A`，无限地重复 `A` 类型的元素。"],["Rev","方向相反的双端迭代器。"],["Scan","一个迭代器，用于在迭代另一个迭代器时维持状态。"],["Skip","一个跳过 `iter` 的 `n` 元素的迭代器。"],["SkipWhile","`predicate` 返回 `true` 时拒绝元素的迭代器。"],["StepBy","一个用于按自定义数量步进迭代器的迭代器。"],["Successors","一个新的迭代器，其中每个连续项都是根据前一个进行计算的。"],["Take","一个仅迭代 `iter` 的前 `n` 迭代的迭代器。"],["TakeWhile","一个仅在 `predicate` 返回 `true` 时才接受元素的迭代器。"],["Zip","同时迭代其他两个迭代器的迭代器。"]],"trait":[["DoubleEndedIterator","一个能够从两端产生元素的迭代器。"],["ExactSizeIterator","知道其确切长度的迭代器。"],["Extend","用迭代器的内容扩展集合。"],["FromIterator","从 [`Iterator`] 转换。"],["FusedIterator","一个迭代器，用完后总是继续产生 `None`。"],["IntoIterator","转换为 [`Iterator`]。"],["Iterator","用于处理迭代器的接口。"],["Product","Trait 表示可以通过乘以迭代器的元素来创建的类型。"],["Step","具有 successor 和 predecessor 操作概念的对象。"],["Sum","Trait 表示可以通过汇总迭代器创建的类型。"],["TrustedLen","一个使用 size_hint 报告准确长度的迭代器。"],["TrustedStep","一种支持 [`Step`] 的所有不可变变量的类型。"]]});