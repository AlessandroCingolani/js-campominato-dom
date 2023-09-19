# Campo Minato

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.

1. Creo array vuoto dove andrò a inserire id univoci delle bombe generate(16 bombe),devo controllare che non corrisponde lo stesso id con una esistente e dare posizionamenti random con una funzione.
2. Creo classe bomba css e se id nell array bombe corrisponde al click metto funzione fine gioco
3. Nella funzione di fine gioco, aggiungo se le caselle da cliccare non bombe sono finite finisce lo stesso.
4. Blocco con removeEventListner la possibilità di cliccare piu volte la stessa casella.
