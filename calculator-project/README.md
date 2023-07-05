# ◆ 電卓

## ◇ 機能
- 0~9ボタン
    - 数が入力される
    - AC -> Cに切り替わる（最初が０の時は切り替わらない）
    - 初期値０のとき０を入力できない
- 四則演算ボタン
    - 一つ目の数（リザルトの数）と二つ目の数を四則演算する
    - ＝ボタンを押さなくても，「num->ope->num->num...」というように計算可能
- ±ボタン
    - 符号反転
    - 値が0の反転可能で，続けて数値を入力すると0だけ打ち消される
- periodボタン
    - 各入力で１つまで
- ＝ボタン
    - 計算結果をリザルトに出力
    - 「first -> ope -> =」で＝を連打すると，２番目の数に入力した値が格納されて計算
- AC/Cボタン
    - ACボタン
        - 全ての変数を初期化
    - Cボタン
        - 2番目の値を空にする
        - おすと，ACボタンに切り替わる

## ◇ 未実装
- スマホを横にしたときの機能追加のレイアウトの変更

---

## ◇ 未実装

- 0のとき符号反転できない
- first -> ope -> reversal
    - 表記×　結果〇
- conmma -> number
    - 表記×　結果〇