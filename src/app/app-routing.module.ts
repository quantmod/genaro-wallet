import { WalletComponent } from './components/wallet/wallet.component';
import { TxSharerComponent } from './components/txSharer/txSharer.component';
import { TxEdenComponent } from './components/txEden/txEden.component';
import { SharerComponent } from './components/sharer/sharer.component';
import { CommitteeComponent } from './components/committee/committee.component';
import { CurrentCommitteeComponent } from './components/currentCommittee/currentCommittee.component';
import { JoinCommitteeComponent } from './components/joinCommittee/joinCommittee.component';
import { DownloadMinerComponent } from './components/downloadMiner/downloadMiner.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdenComponent } from './components/eden/eden.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [{
    path: 'wallet',
    component: WalletComponent,
}, {
    path: 'eden',
    component: EdenComponent,
}, {
    path: 'eden/:path',
    component: EdenComponent,
}, {
    path: 'eden-inprocess',
    component: TaskComponent,
}, {
    path: 'eden-done',
    component: TaskComponent,
}, {
    path: 'tx-eden',
    component: TxEdenComponent,
}, {
    path: 'tx-sharer',
    component: TxSharerComponent,
}, {
    path: 'sharer',
    component: SharerComponent,
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/wallet',
}, {
    path: 'currentCommittee',
    component: CurrentCommitteeComponent,
}, {
    path: 'committee',
    component: CommitteeComponent,
}, {
    path: 'joinCommittee',
    component: JoinCommitteeComponent,
}, {
    path: 'downloadMiner',
    component: DownloadMinerComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
