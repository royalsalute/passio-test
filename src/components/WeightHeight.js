import { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, FormText, Col, Row } from "reactstrap";

const UNIT_TYPES = {
  IMPERIAL: "Imperial",
  METRIC: "Metric",
};

function meterToFeet(value) {
  return value / 3.28084;
}

function feetToMeter(value) {
  return value * 3.28084;
}

function kgToLbs(value) {
  return value * 0.453592;
}

function lbsToKg(value) {
  return value / 0.453592;
}

export default () => {
  const [unitType, setUnitType] = useState(UNIT_TYPES.IMPERIAL);
  const [weight, setWeight] = useState('0.0')
  const [height, setHeight] = useState('0.0')

  useEffect(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (unitType === UNIT_TYPES.IMPERIAL) {
      setWeight(lbsToKg(w).toString());
      setHeight(feetToMeter(h).toString());
    } else {
      setWeight(kgToLbs(w).toString());
      setHeight(meterToFeet(h).toString());
    }
  }, [unitType]);

  return (
    <Form>
      <Row>
        <Col>
          <FormGroup>
            <Label for="weight">Weight</Label>
            <div className="d-flex align-items-center">
              <Input id="weight" name="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              <span className="ps-2">{unitType === UNIT_TYPES.IMPERIAL ? "lbs" : "kg"}</span>
            </div>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Label for="height">Height</Label>
            <div className="d-flex align-items-center">
              <Input id="height" name="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
              <span className="ps-2">{unitType === UNIT_TYPES.IMPERIAL ? "ft" : "m"}</span>
            </div>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Label for="idUnit">Unit</Label>
            <Input id="idUnit" name="unitType" type="select" value={unitType} onChange={(e) => setUnitType(e.target.value)}>
              <option value={UNIT_TYPES.IMPERIAL}>{UNIT_TYPES.IMPERIAL}</option>
              <option value={UNIT_TYPES.METRIC}>{UNIT_TYPES.METRIC}</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
