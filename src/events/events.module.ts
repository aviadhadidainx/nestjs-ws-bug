import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsGateway01 } from './events.gateway01';
import { EventsGateway02 } from './events.gateway02';
import { EventsGateway03 } from './events.gateway03';
import { EventsGateway04 } from './events.gateway04';
import { EventsGateway05 } from './events.gateway05';
import { EventsGateway06 } from './events.gateway06';
import { EventsGateway07 } from './events.gateway07';
import { EventsGateway08 } from './events.gateway08';
import { EventsGateway09 } from './events.gateway09';
import { EventsGateway10 } from './events.gateway10';
import { EventsGateway11 } from './events.gateway11';
import { EventsGateway12 } from './events.gateway12';

@Module({
  providers: [EventsGateway, EventsGateway01, EventsGateway02, EventsGateway03, EventsGateway04, EventsGateway05, 
    EventsGateway06, EventsGateway07, EventsGateway08, 
    EventsGateway09, EventsGateway10, EventsGateway11,
    EventsGateway12],
})
export class EventsModule {}
