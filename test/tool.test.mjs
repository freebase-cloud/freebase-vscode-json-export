import {test} from 'node:test';
import assert from 'node:assert/strict';
import {schemaDiff,quality,parseCSV,importPlan,importCSV,jsonExport,compareInstances,auditTools} from '../src/tools.mjs';
test("Export bounded records to JSON",async()=>{assert.equal(jsonExport([{id:1}]).format,'freebase-example/v1'); assert.equal(jsonExport(Array(1000).fill({})).truncatedPossible,true);});
