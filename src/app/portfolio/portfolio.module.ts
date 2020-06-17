import { NgModule } from "@angular/core";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { sharedModule } from '../global';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
    declarations:[
PortfolioComponent,
ArtworkComponent
    ],
    imports:[
sharedModule,
PortfolioRoutingModule
    ],
})

export class PortfolioModule{};