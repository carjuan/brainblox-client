import type { Driver, DriveStep } from 'driver.js';
import { driver as createDriver } from 'driver.js';
import 'driver.js/dist/driver.css';

type TourGuides = Array<TourStep>;

type TourStep = DriveStep;

type DriverOptions = { showProgress: boolean; steps: TourGuides };

type CreateDriver = (options: DriverOptions) => Driver;

interface IAppTour {
  tourGuides: TourGuides;
  registerTourGuides: (htmlSelectors: TourGuides) => void;
  startTour: () => void;
}

class AppTour implements IAppTour {
  tourGuides: TourGuides;
  driver: CreateDriver;

  constructor(driver: CreateDriver) {
    this.driver = driver;
    this.tourGuides = [];
  }

  registerTourGuides = (elements: TourGuides): AppTour => {
    this.tourGuides = elements;
    return this;
  };

  startTour = () => {
    if (!this.tourGuides.length) {
      throw new Error('No element registers to start app tour');
    }

    const driverInstance: Driver = this.driver({
      showProgress: true,
      steps: this.tourGuides,
    });

    driverInstance.drive();
  };
}

const appTour = new AppTour(createDriver);

export default appTour;
