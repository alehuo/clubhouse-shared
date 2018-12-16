process.env.NODE_ENV = "test";

import { expect } from "chai";
import chai from "chai";
import "mocha";
import moment from "moment";
import { calendarEventFilter } from "../../src/Filters";
import { CalendarEvent } from "../../src/Models";
const should: Chai.Should = chai.should();

describe("CalendarEvent", () => {
  it("should get and set properties correctly", (done) => {
    const calendarEvent: CalendarEvent = {
      addedBy: 1,
      created_at: moment(new Date(2016, 1, 1, 22, 12)).toISOString(),
      description: "Test description",
      endTime: moment(new Date(2016, 1, 2, 6, 2)).toISOString(),
      eventId: 1,
      locationId: 22,
      name: "Test event",
      restricted: 1,
      startTime: moment(new Date(2016, 1, 1, 23, 0)).toISOString(),
      unionId: 52,
      updated_at: moment(new Date(2016, 1, 1, 22, 13)).toISOString(),
    };

    should.exist(calendarEvent.addedBy);
    should.exist(calendarEvent.created_at);
    should.exist(calendarEvent.description);
    should.exist(calendarEvent.endTime);
    should.exist(calendarEvent.locationId);
    should.exist(calendarEvent.name);
    should.exist(calendarEvent.restricted);
    should.exist(calendarEvent.startTime);
    should.exist(calendarEvent.unionId);
    should.exist(calendarEvent.updated_at);

    expect(calendarEvent.addedBy).to.equal(1);

    expect(calendarEvent.created_at).to.equal(
      moment(new Date(2016, 1, 1, 22, 12)).toISOString(),
    );
    expect(calendarEvent.description).to.equal("Test description");
    expect(calendarEvent.endTime).to.equal(
      moment(new Date(2016, 1, 2, 6, 2)).toISOString(),
    );
    expect(calendarEvent.eventId).to.equal(1);
    expect(calendarEvent.locationId).to.equal(22);
    expect(calendarEvent.name).to.equal("Test event");
    expect(calendarEvent.restricted).to.equal(1);
    expect(calendarEvent.startTime).to.equal(
      moment(new Date(2016, 1, 1, 23, 0)).toISOString(),
    );
    expect(calendarEvent.unionId).to.equal(52);

    expect(calendarEvent.updated_at).to.equal(
      moment(new Date(2016, 1, 1, 22, 13)).toISOString(),
    );
    done();
  });

  it("should filter event correctly", (done) => {
    const calendarEvent1: CalendarEvent = {
      addedBy: 1,
      created_at: moment(new Date(2016, 1, 1, 22, 12)).toISOString(),
      description: "Test description",
      endTime: moment(new Date(2016, 1, 2, 6, 2)).toISOString(),
      eventId: 1,
      locationId: 22,
      name: "Test event",
      restricted: 1,
      startTime: moment(new Date(2016, 1, 1, 23, 0)).toISOString(),
      unionId: 52,
      updated_at: moment(new Date(2016, 1, 1, 22, 13)).toISOString(),
    };

    const calendarEvent: CalendarEvent = calendarEventFilter(calendarEvent1);

    should.exist(calendarEvent.addedBy);
    should.exist(calendarEvent.created_at);
    should.exist(calendarEvent.description);
    should.exist(calendarEvent.endTime);
    should.exist(calendarEvent.locationId);
    should.exist(calendarEvent.name);
    should.exist(calendarEvent.restricted);
    should.exist(calendarEvent.startTime);
    should.exist(calendarEvent.unionId);
    should.exist(calendarEvent.updated_at);

    expect(calendarEvent.addedBy).to.equal(1);
    expect(calendarEvent.created_at).to.equal(
      moment(new Date(2016, 1, 1, 22, 12)).toISOString(),
    );
    expect(calendarEvent.description).to.equal("Test description");
    expect(calendarEvent.endTime).to.equal(
      moment(new Date(2016, 1, 2, 6, 2)).toISOString(),
    );
    expect(calendarEvent.eventId).to.equal(1);
    expect(calendarEvent.locationId).to.equal(22);
    expect(calendarEvent.name).to.equal("Test event");
    expect(calendarEvent.restricted).to.equal(1);
    expect(calendarEvent.startTime).to.equal(
      moment(new Date(2016, 1, 1, 23, 0)).toISOString(),
    );
    expect(calendarEvent.unionId).to.equal(52);
    expect(calendarEvent.updated_at).to.equal(
      moment(new Date(2016, 1, 1, 22, 13)).toISOString(),
    );
    done();
  });
});
