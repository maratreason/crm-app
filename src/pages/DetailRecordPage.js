import {$} from "@core/Dom";
import {Page} from "@core/Page";

export class DetailRecordPage extends Page {
    getRoot() {
        return $.create("div", "app-page").html(`
            <div>
                <div>
                    <div class="breadcrumb-wrap">
                        <a href="/history" class="breadcrumb">История</a>
                        <a class="breadcrumb">
                            Расход
                        </a>
                    </div>
                    <div class="row">
                        <div class="col s12 m6">
                            <div class="card red">
                                <div class="card-content white-text">
                                    <p>Описание:</p>
                                    <p>Сумма:</p>
                                    <p>Категория:</p>
                        
                                    <small>12.12.12</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }
}
