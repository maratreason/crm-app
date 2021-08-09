import {$} from "@core/Dom";
import {Page} from "@core/Page";

export class PlanningPage extends Page {
    getRoot() {
        return $.create("div", "app-page").html(`
            <div>
                <div class="page-title">
                    <h3>Планирование</h3>
                    <h4>12 212</h4>
                </div>
            
                <section>
                    <div>
                        <p>
                            <strong>Девушка:</strong>
                            12 122 из 14 0000
                        </p>
                        <div class="progress" >
                            <div
                                class="determinate green"
                                style="width:40%"
                            ></div>
                        </div>
                    </div>
                </section>
            </div>
        `);
    }
}
