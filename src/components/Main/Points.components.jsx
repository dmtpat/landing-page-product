import 'bootstrap/dist/css/bootstrap.min.css';
import invisible from "../../assets/invisible.png";

function Points() {
    return (
        <div id="punti_di_forza" className='container my-5 py-5'>
            <div className="row mt-5">
                <div className="col-4 container text-center">
                    <div className="row"><div className="col m-4">
                        <h1 className="fw-bolder">Lunga Durata della Batteria</h1>
                        <p>Goditi ore di assistenza continua nella risoluzione dei bug grazie alla durata della *batteria* (ovvero, la tua pazienza) delle paperelle di gomma.</p></div></div>
                    <div className="row"><div className="col m-4">
                        <h1 className="fw-bolder">Compatibilità Universasle</h1>
                        <p>Funziona con tutti i linguaggi di programmazione e sistemi operativi, la paperella di gomma è l'unico strumento di debugging che non necessita di aggiornamenti.</p></div></div>
                    <div className="row"><div className="col m-4">
                        <h1 className="fw-bolder">Design Elegante</h1>
                        <p>Mostra con orgoglio il design elegante e raffinato della tua paperella di gomma, disponibile in vari colori per abbinarsi al tuo stile di programmatore.</p></div></div>
                </div>
                <div className="col-4">
                    <img className='img-thumbnail border-0 my-5 py-5 p-2' src={invisible} alt="" />
                </div>
                <div className="col-4 container text-center">
                    <div className="row"><div className="col m-4">
                        <h1 className="fw-bolder">Resistenza agli Spruzzi</h1>
                        <p>Perfetta per resistere a incidenti con caffè e bevande, la tua paperella di gomma non teme schizzi, mantenendoti sempre pronto per il debugging.</p>
                    </div></div>
                    <div className="row"><div className="col m-4">
                        <h1 className="fw-bolder">Potabilità</h1>
                        <p>Leggera e facile da trasportare, la paperella di gomma può essere il tuo compagno di lavoro ovunque tu vada. Portala con te per un supporto costante.</p></div></div>
                    <div className="row"><div className="col m-4">
                        <h1 className="fw-bolder">Promemoria <br />Anti-Stress</h1>
                        <p>Quando lo stress del codice diventa troppo, spremi la tua paperella di gomma per un rapido sollievo anti-stress, senza bisogno di software complicati.</p></div></div>
                </div>
            </div>
        </div>
    );
}

export default Points